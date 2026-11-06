const sidePhotos = [
  { src: '/images/testimonial-1.png', name: 'Jacob Sloan' },
  { src: '/images/testimonial-3.png', name: 'Brown family' },
]

function PhotoCard({ src, name }) {
  return (
    <figure className="relative h-80 overflow-hidden md:aspect-[72/115] md:h-auto">
      <img src={src} alt={name} className="h-full w-full object-cover" />
      {/* warm salmon tint, as in the design */}
      <div className="absolute inset-0 bg-[#EE7B4D]/50" />
      <figcaption className="absolute inset-x-0 bottom-3 text-center text-[10px] text-white md:bottom-[2.2cqw] md:text-[max(9px,1.5cqw)]">
        {name}
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews">
      {/* cqw: 1cqw = 1% of this wrapper's width, so everything scales together */}
      <div className="mx-auto w-[88%] [container-type:inline-size] md:w-[82%]">
        <div className="py-12 md:pb-[6cqw] md:pt-[7.7cqw]">
          <h2 className="mb-6 text-2xl font-light md:mb-[6.9cqw] md:text-[2.8cqw] md:leading-none">
            Testimonials
          </h2>

          <div className="grid gap-4 md:grid-cols-[78fr_111fr_78fr] md:gap-[1.6cqw]">
            <PhotoCard {...sidePhotos[0]} />

            <figure className="flex flex-col items-center border border-[#F4A3A3] bg-white px-6 py-8 text-center md:px-[7.3cqw] md:pb-0 md:pt-[6.2cqw]">
              <img
                src="/images/avatar.png"
                alt="Serena Johnson"
                className="h-16 w-16 rounded-full object-cover md:h-[10.6cqw] md:w-[10.6cqw]"
              />
              <blockquote className="mt-4 text-xs leading-[1.65] text-neutral-700 md:mt-[3cqw] md:text-[max(9px,1.3cqw)]">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit at Alexandra, lacus ut nam rece nonummy, luctus magna fringilla ante porttitor.”
              </blockquote>
              <span className="my-3 block h-px w-8 bg-neutral-300 md:my-[1.8cqw] md:w-[3.6cqw]" />
              <figcaption className="text-xs font-bold text-neutral-900 md:text-[max(10px,1.5cqw)]">
                Serena Johnson
              </figcaption>
            </figure>

            <PhotoCard {...sidePhotos[1]} />
          </div>
        </div>
      </div>
    </section>
  )
}