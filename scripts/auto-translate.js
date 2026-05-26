/**
 * auto-translate.js
 *
 * Finds every key present in messages/en.json but MISSING in fr/es/pt/ar
 * and fills them automatically using the MyMemory API (free, no key needed).
 *
 * Only runs on messages/en.json → messages/{lang}.json.
 * Long-form content (help/, legal/) must be translated by Claude in-session
 * due to MyMemory's 500-char limit and quality requirements for legal text.
 *
 * Usage:
 *   node scripts/auto-translate.js
 *
 * After running, rebuild and push the website.
 */

const fs = require('fs')
const path = require('path')

const MESSAGES_DIR = path.join(__dirname, '..', 'messages')
const TARGET_LANGS = ['fr', 'es', 'pt', 'ar']
const DELAY_MS = 350 // be gentle with the free API

// ─── Helpers ─────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

/** Flatten nested JSON into dot-path key-value pairs */
function flatten(obj, prefix = '') {
  const result = {}
  for (const [key, val] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (val !== null && typeof val === 'object' && !Array.isArray(val)) {
      Object.assign(result, flatten(val, fullKey))
    } else {
      result[fullKey] = val
    }
  }
  return result
}

/** Set a value in a nested object by dot-path key */
function setByPath(obj, dotPath, value) {
  const keys = dotPath.split('.')
  let cur = obj
  for (let i = 0; i < keys.length - 1; i++) {
    if (cur[keys[i]] === undefined) cur[keys[i]] = {}
    cur = cur[keys[i]]
  }
  cur[keys[keys.length - 1]] = value
}

/** Get a value from a nested object by dot-path key */
function getByPath(obj, dotPath) {
  return dotPath.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), obj)
}

// ─── Translation ──────────────────────────────────────────────────────────────

async function translate(text, targetLang, retries = 2) {
  // Skip very long strings (MyMemory cap ~500 chars — these should be done manually)
  if (text.length > 400) {
    throw new Error(`String too long (${text.length} chars) — translate manually`)
  }

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()

      if (data.responseStatus === 429) {
        console.warn(`    Rate limited — waiting 3s...`)
        await sleep(3000)
        continue
      }

      if (data.responseStatus !== 200) {
        throw new Error(data.responseDetails ?? `Status ${data.responseStatus}`)
      }

      const result = data.responseData.translatedText
      // MyMemory sometimes echoes back untranslated — treat as failure
      if (result === text && targetLang !== 'en') {
        throw new Error('Translation returned source text unchanged')
      }

      return result
    } catch (err) {
      if (attempt === retries) throw err
      await sleep(1000)
    }
  }
}

// ─── Core logic ───────────────────────────────────────────────────────────────

async function processLang(enFlat, enObj, lang) {
  const filePath = path.join(MESSAGES_DIR, `${lang}.json`)

  let targetObj = {}
  if (fs.existsSync(filePath)) {
    targetObj = JSON.parse(fs.readFileSync(filePath, 'utf8'))
  }

  const targetFlat = flatten(targetObj)
  const missingKeys = Object.keys(enFlat).filter((k) => getByPath(targetObj, k) === undefined)

  if (missingKeys.length === 0) {
    console.log(`  [${lang}] ✓ Nothing missing\n`)
    return
  }

  console.log(`  [${lang}] ${missingKeys.length} missing keys\n`)

  let translated = 0
  let failed = 0

  for (const key of missingKeys) {
    const sourceValue = enFlat[key]

    // Skip non-string values (arrays, objects, numbers)
    if (typeof sourceValue !== 'string') {
      setByPath(targetObj, key, sourceValue)
      continue
    }

    // Skip empty strings
    if (!sourceValue.trim()) {
      setByPath(targetObj, key, sourceValue)
      continue
    }

    try {
      const result = await translate(sourceValue, lang)
      setByPath(targetObj, key, result)
      translated++
      const preview = key.length > 50 ? key.slice(0, 50) + '…' : key
      console.log(`  ✓ [${lang}] ${preview}`)
    } catch (err) {
      failed++
      const preview = key.length > 50 ? key.slice(0, 50) + '…' : key
      console.error(`  ✗ [${lang}] ${preview} — ${err.message}`)
      // Keep the English value as fallback so the page doesn't break
      setByPath(targetObj, key, sourceValue)
    }

    await sleep(DELAY_MS)
  }

  fs.writeFileSync(filePath, JSON.stringify(targetObj, null, 2) + '\n', 'utf8')
  console.log(`\n  → ${lang}: ${translated} translated, ${failed} kept in English\n`)
}

async function main() {
  console.log('Spektt Website — Auto-translate missing JSON keys via MyMemory\n')
  console.log('Source: messages/en.json → messages/{fr,es,pt,ar}.json\n')
  console.log('Note: help/ and legal/ files must be translated manually (too long for API)\n')
  console.log('─'.repeat(60))

  const enPath = path.join(MESSAGES_DIR, 'en.json')
  const enObj = JSON.parse(fs.readFileSync(enPath, 'utf8'))
  const enFlat = flatten(enObj)

  console.log(`English source: ${Object.keys(enFlat).length} keys\n`)

  for (const lang of TARGET_LANGS) {
    await processLang(enFlat, enObj, lang)
  }

  console.log('─'.repeat(60))
  console.log('Done. Review the changes, then push to trigger Vercel deploy.\n')
  console.log('For help/ and legal/ content changes, ask Claude to translate in-session.')
}

main().catch(console.error)
