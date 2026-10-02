// ─── Where the download buttons point ─────────────────────────────────────────
//
// ONE definition. These links were previously hardcoded in five components
// (hero, cta, footer, download, deep-link-fallback) with the Play href left as a dead
// `href='#'` placeholder — so "add the Play link" meant editing five files and missing one.
//
// 🚀 Android went LIVE on Google Play 2026-10-02 (build 8 / 1.0.0, 178 countries).

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.spektt.app'

/**
 * ⚠️ NOT live yet — iOS 1.0 is still in App Review as of 2026-10-02 (re-review after two
 * metadata rejections on 09-30). Until Apple approves AND the release is manually pressed,
 * this URL 404s for visitors. That is why `IOS_LIVE` exists rather than linking it directly.
 */
export const APP_STORE_URL = 'https://apps.apple.com/app/spektt/id6770248818'

/**
 * The public TestFlight link — live, 10,000 slots. Used for iOS until the App Store listing
 * resolves, so iPhone visitors get something installable instead of a dead end.
 *
 * ⚠️ TestFlight builds EXPIRE (90 days). Build 8 was added 2026-09-27, so this link stops
 * working around **late December 2026** if iOS review is still dragging. It is not permanent.
 */
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/Mrn7ng37'

/**
 * 🔴 **Flip this to `true` the moment iOS 1.0 is released on the App Store** — the one change
 * that swaps every iOS button on the site from TestFlight to the real listing.
 *
 * Apple approval alone is NOT enough: the release is set to "Manually release this version",
 * so approval does not put it on sale. Flip this after pressing that button, not before.
 */
export const IOS_LIVE = false

/** What the iOS buttons should point at right now. */
export const IOS_URL = IOS_LIVE ? APP_STORE_URL : TESTFLIGHT_URL

/** Alt text / label for the iOS button, so it never promises a store listing that isn't there. */
export const IOS_LABEL = IOS_LIVE
  ? 'Download on the App Store'
  : 'Join the iOS beta on TestFlight'
