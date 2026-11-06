
import { useState } from 'react'

const featured = {
  title: 'Zimbabwe luxury',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit at aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
  points: ['2 people', 'All meals provided', 'Luxury transport'],
  price: '$3,880 per person',
  image: '/images/pool.png',
}

const tours = [
  { image: '/images/zambezi.png', title: 'The best of the Zambezi', plan: '6 day tour deluxe plan' },
  { image: '/images/tent.png', title: 'The best of the Zambezi', plan: '6 day tour deluxe plan' },
]

export default function Itineraries() {
  const [saved, setSaved] = useState(false)

  return (
    <section id="itineraries" className="py-16 md:py-20">
      {/* Container units (cqw) keep text and spacing in proportion to the design */}
      <div className="mx-auto max-w-6xl [container-type:inline-size]">
        <div className="px-6 md:px-[3.8%]">
          <h2 className="mb-8 text-2xl font-light md:mb-[2.9cqw] md:text-[2.7cqw] md:leading-none">
            Suggested itenaries
          </h2>

          <div className="grid gap-3 md:grid-cols-[275fr_145fr_145fr] md:gap-[1cqw]">
            {/* Featured card: orange panel + photo */}
            <article className="flex flex-col md:flex-row">
              <div className="relative flex flex-col bg-brand text-white md:basis-[52%]">
                <button
                  type="button"
                  onClick={() => setSaved((s) => !s)}
                  aria-pressed={saved}
                  aria-label={saved ? 'Remove from saved' : 'Save itinerary'}
                  className="absolute right-4 top-0 z-10 flex h-8 w-8 items-center justify-center bg-white md:right-[1.9cqw] md:h-[2.9cqw] md:w-[2.9cqw]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform duration-200 md:h-[1.4cqw] md:w-[1.4cqw] ${saved ? 'scale-125' : 'scale-100'}`}
                    fill={saved ? '#e11d2e' : 'none'}
                    stroke="#e11d2e"
                    strokeWidth="2.5"
                  >
                    <path d="M12 21s-7.5-4.8-9.7-9.3C.6 8.200 2.700 4.500 6.300 4.500c2.300 0 4.100 1.300 5.700 3.500 1.600-2.200 3.400-3.500 5.700-3.500 3.600 0 5.700 3.700 4 7.200C19.500 16.200 12 21 12 21z" />
                  </svg>
                </button>

                <div className="p-5 md:px-[1.9cqw] md:pb-0 md:pt-[2.7cqw]">
                  <h3 className="text-sm font-semibold md:text-[1.25cqw]">{featured.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed md:mt-[1.4cqw] md:text-[1.05cqw] md:leading-[1.65]">
                    {featured.text}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs md:mt-[2.2cqw] md:space-y-[1.2cqw] md:text-[1.05cqw]">
                    {featured.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 md:gap-[1cqw]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white md:h-[0.6cqw] md:w-[0.6cqw]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 md:mt-auto">
                  <p className="border-t border-white/50 px-5 py-3 text-sm font-bold md:px-[1.9cqw] md:py-[1.1cqw] md:text-[1.4cqw]">
                    {featured.price}
                  </p>
                  <a
                    href="#"
                    className="group flex items-center justify-between border-t border-white/50 px-5 py-4 text-xs font-semibold md:px-[1.9cqw] md:py-[2.3cqw] md:text-[1.2cqw]"
                  >
                    See full itenarary
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-[1.5cqw] md:w-[1.5cqw]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="h-64 overflow-hidden md:h-auto md:flex-1">
                <img src={featured.image} alt="Couple relaxing by an infinity pool" className="h-full w-full object-cover" />
              </div>
            </article>

            {/* Tour cards */}
            {tours.map((t, i) => (
              <a
                key={i}
                href="#"
                className="group relative block aspect-[3/4] overflow-hidden md:aspect-[145/220]"
              >
                <img
                  src={t.image}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 pb-5 text-center text-white md:pb-[2.6cqw]">
                  <h3 className="text-sm italic md:text-[1.3cqw]">{t.title}</h3>
                  <p className="mt-1 text-xs font-light md:mt-[0.6cqw] md:text-[1.05cqw]">{t.plan}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}