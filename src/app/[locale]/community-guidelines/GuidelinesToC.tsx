'use client'

interface ToCItem {
  id: string
  label: string
}

export default function GuidelinesToC({ items, tocTitle = 'Table of Contents' }: { items: ToCItem[]; tocTitle?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className='my-10 border border-white/10 rounded-xl p-6 bg-dark'>
      <h2 className='text-white font-bold text-lg mb-4'>{tocTitle}</h2>
      <ul className='flex flex-col gap-2'>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className='privacy-policy-text hover:text-white transition-colors'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
