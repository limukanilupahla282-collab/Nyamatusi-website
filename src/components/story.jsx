
export default function Story() {
  return (
    <section id="story">
      {/* cqw units: 1cqw = 1% of this wrapper's width, so everything scales with the design */}
      <div className="mx-auto w-[88%] [container-type:inline-size] md:w-[82%]">
        <div className="py-12 md:pb-0 md:pt-[5.1cqw]">
          <div className="md:relative md:aspect-[273/155]">
            <h2 className="mb-6 text-2xl font-light md:absolute md:left-0 md:top-[3.2%] md:mb-0 md:text-[2.7cqw] md:leading-none">
              Our story
            </h2>

            <div className="md:absolute md:left-0 md:top-[27.7%] md:w-[39.9%]">
              <p className="text-sm leading-relaxed md:text-[1.08cqw] md:leading-[1.7]">
                Nyamatusi Camp is our flagship in terms of its first-class luxury. Our Mana Pools safari lodge is set in one of the oldest and most remote parts of Africa, on the banks of the Zambezi, one of the world's wildest rivers. Embracing comfort, this property welcomes exclusive guests to wilderness located in the most distant map I have seen. Our Mana Pools safari plays out against a sweeping and visual landscape, home of the wildlife.
              </p>
              <p className="mt-4 text-sm leading-relaxed md:mt-[1.6cqw] md:text-[1.08cqw] md:leading-[1.7]">
                Consisting of six luxuriously fitted tents, with uninterrupted views of the river and escarpment beyond, our Mana Pools safari lodge invites a lavish escape to natural, fresh senses, guest love is adorned with soft drapery and a replica with .....
              </p>
              <a
                href="#"
                className="mt-5 inline-block bg-brand px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-orange-700 md:mt-[1.8cqw] md:px-[1.2cqw] md:py-[0.75cqw] md:text-[1cqw]"
              >
                Enquire now
              </a>
            </div>

            <img
              src="/images/game-drive.png"
              alt="Game drive with an elephant ahead"
              className="mt-8 h-64 w-full object-cover md:absolute md:left-[45%] md:top-[21.9%] md:mt-0 md:h-[67.1%] md:w-[33%]"
            />
            <img
              src="/images/lion-small.png"
              alt="Lion"
              className="mt-4 h-48 w-full object-cover md:absolute md:left-[79.5%] md:top-0 md:mt-0 md:h-[40.6%] md:w-[20.5%]"
            />
            <img
              src="/images/lodge-deck.png"
              alt="Lodge deck over the river"
              className="mt-4 h-48 w-full object-cover md:absolute md:left-[79.5%] md:top-[45.2%] md:mt-0 md:h-[54.8%] md:w-[20.5%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}