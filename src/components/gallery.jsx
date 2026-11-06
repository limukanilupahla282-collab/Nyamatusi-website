
// Each class string is written out in full so Tailwind can detect it.
const photos = [
  { src: 'gallery-jeep.png',      alt: 'Safari vehicle on a dirt road',  span: 'col-span-6 md:col-span-3' },
  { src: 'gallery-elephants.png', alt: 'Elephants seen from a game drive', span: 'col-span-3 md:col-span-1' },
  { src: 'gallery-canoe.png',     alt: 'Canoeing on the river',          span: 'col-span-3 md:col-span-1' },
  { src: 'gallery-giraffe.png',   alt: 'Giraffe at sunset',              span: 'col-span-2 md:col-span-1' },
  { src: 'gallery-sunset.png',    alt: 'Acacia tree at sunset',          span: 'col-span-2 md:col-span-1' },
  { src: 'gallery-paw.png',       alt: 'Paw prints in the sand',         span: 'col-span-2 md:col-span-1' },
  { src: 'gallery-lodge.png',     alt: 'Lodge tent interior',            span: 'col-span-6 md:col-span-2' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-20">
      {/* Container units (cqw) keep sizes in proportion to the design */}
      <div className="mx-auto w-full [container-type:inline-size] md:w-[82%]">
        <h2 className="mb-8 px-6 text-2xl font-light md:mb-[3.6cqw] md:px-0 md:text-[2.7cqw] md:leading-none">
          Our gallery
        </h2>

        <div className="px-6 md:px-0">
          <div className="grid auto-rows-[34cqw] grid-cols-6 gap-2 md:auto-rows-[19.15cqw] md:grid-cols-[83fr_83fr_83fr_114fr_114fr] md:gap-[0.94cqw]">
            {photos.map((p) => (
              <figure key={p.src} className={`${p.span} group overflow-hidden`}>
                <img
                  src={`/images/${p.src}`}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}