
import { useState } from 'react'

const activities = [
  { title: 'Game drives',   img: 'game-drives.png',   text: 'Open vehicle drives at sunrise and dusk take you close to the wildlife with an expert guide.' },
  { title: 'Walking safari', img: 'walking-safari.png', text: 'Follow the tracks on foot and learn to read the bush with an armed guide.' },
  { title: 'Bird watching',  img: 'bird-watching.png',  text: 'Over 380 species along the river, from kingfishers to fish eagles.' },
  { title: 'Canoeing',       img: 'canoeing.png',       text: 'Glide past elephants and hippos on the calm waters of the Zambezi.' },
  { title: 'Fishing',        img: 'fishing.png',        text: 'Cast for tigerfish from the bank or a boat, with all gear provided.' },
]

export default function Activities() {
  const [active, setActive] = useState(0)

  return (
    <section id="activities">
      <div className="mx-auto w-[88%] [container-type:inline-size] md:w-[82%]">
        <div className="py-12 md:pb-[8cqw] md:pt-[12.5cqw]">
          <h2 className="mx-[-4%] mb-6 w-[108%] text-2xl font-light md:mb-[6.2cqw] md:text-[2.7cqw] md:leading-none">
            Our activities
          </h2>

          <div className="mx-[-4%] w-[108%] flex flex-col gap-2 md:aspect-[272/90] md:flex-row md:gap-[0.74cqw]">
            {activities.map((a, i) => {
              const isActive = i === active
              return (
                <article
                  key={a.title}
                  tabIndex={0}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  style={{ '--g': isActive ? 64 : 50 }}
                  className="relative h-60 cursor-pointer overflow-hidden outline-none md:h-auto md:basis-0 md:[flex-grow:var(--g)] md:transition-[flex-grow] md:duration-500 md:ease-out"
                >
                  <img src={`/images/${a.img}`} alt={a.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  <div className={`absolute inset-x-0 bottom-0 p-4 pb-5 text-white md:px-[1.2cqw] md:pb-[2cqw] ${isActive ? 'text-left' : 'text-center'}`}>
                    <h3 className="text-sm font-medium md:text-[1.6cqw]">{a.title}</h3>
                    <p
                      className={`overflow-hidden text-xs leading-snug transition-all duration-500 md:text-[1.05cqw] ${
                        isActive ? 'mt-2 max-h-24 opacity-100 md:mt-[0.6cqw]' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {a.text}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}