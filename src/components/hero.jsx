import { useState } from 'react'

const links = [
  ['About', '#story'],
  ['Activities', '#activities'],
  ['Itineraries', '#itineraries'],
  ['Reviews', '#reviews'],
  ['Gallery', '#gallery'],
]

const socials = [
  {
    label: 'Facebook',
    icon: <path fill="currentColor" d="M14 8V6.5c0-.8.2-1.2 1.3-1.2H17V2h-2.6C11.4 2 10 3.7 10 6.2V8H7.5v3.3H10V22h4V11.3h2.7L17 8z" />,
  },
  {
    label: 'Instagram',
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </g>
    ),
  },
  {
    label: 'Twitter',
    icon: (
      <path
        fill="currentColor"
        d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.5 4.7a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z"
      />
    ),
  },
]

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="relative min-h-[260px] bg-cover bg-center text-white md:aspect-video"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      <h1 className="absolute left-1/2 top-[32%] z-10 -translate-x-1/2 whitespace-nowrap text-[10vw] font-extralight leading-none text-white md:top-[37%] md:text-[6vw]">
        Indulge in
      </h1>

      {/* Nav with the thin line underneath */}
      <nav className="absolute inset-x-0 top-0 z-20 flex h-14 items-center justify-between border-b border-white/50 px-6 md:h-[6.3vw] md:px-[4.2vw] md:pt-[1.5vw]">
        <a href="#" className="brand-word leading-none">
          Nyamatusi
        </a>

        <div className="flex items-center gap-[10.5vw]">
          <ul className="hidden gap-[2.6vw] text-[1.1vw] md:flex">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors hover:text-brand">{label}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger: three right-aligned lines, long / medium / short */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex flex-col items-end gap-[5px] py-2 md:gap-[0.55vw]"
          >
            <span className="block h-0.5 w-6 bg-white md:w-[3.1vw]" />
            <span className="block h-0.5 w-[18px] bg-white md:w-[2.25vw]" />
            <span className="block h-0.5 w-3 bg-white md:w-[1.6vw]" />
          </button>
        </div>

        {open && (
          <ul className="absolute right-6 top-16 w-48 space-y-3 bg-black/80 p-4 text-sm md:right-[4.2vw] md:top-[7vw] md:text-[1.1vw]">
            {links.map(([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setOpen(false)} className="block hover:text-brand">{label}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Social icons */}
      <div className="absolute right-[4.2vw] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-[2.9vw] md:flex">
        {socials.map((s) => (
          <a key={s.label} href="#" aria-label={s.label} className="block h-[1.5vw] w-[1.5vw] transition-colors hover:text-brand">
            <svg viewBox="0 0 24 24" className="h-full w-full">{s.icon}</svg>
          </a>
        ))}
      </div>

      {/* Scroll chevron */}
      <a
        href="#story"
        aria-label="Scroll down"
        className="absolute bottom-[3.6vw] left-1/2 z-10 h-4 w-4 -translate-x-1/2 animate-bounce md:h-[2.4vw] md:w-[2.4vw]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-full w-full">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </header>
  )
}