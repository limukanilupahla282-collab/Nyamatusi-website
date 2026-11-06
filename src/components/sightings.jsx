const photos = [
  // [file, alt, left, top, width, height]  (percentages of the section, taken from your design)
  ['giraffe.png',   'Giraffe at sunset',  '7.66%',   '49.7%',  '16.5%',  '35.5%'],
  ['impala.png',    'Impala',             '25%',     '55.8%',  '16.5%',  '35.3%'],
  ['zebra.png',     'Two zebras',         '42.19%',  '42.3%',  '16.5%',  '33.3%'],
  ['elephant.png',  'Elephant',           '59.38%',  '14.5%',  '16.5%',  '46.5%'],
  ['wildebeest.png','Herd of wildebeest', '59.38%',  '62.5%',  '16.5%',  '26%'],
  ['lion.png',      'Roaring lion',       '76.72%',  '26.5%',  '16.5%',  '64.5%'],
]

export default function Sightings() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-0 md:py-20">
      {/* On md+ this is a fixed-ratio canvas; text scales with it via container units */}
      <div className="grid grid-cols-2 gap-3 [container-type:inline-size] md:relative md:block md:aspect-[16/9]">
        <h2 className="col-span-2 text-2xl font-light md:absolute md:left-[8.9%] md:top-[10.5%] md:text-[2.7cqw] md:leading-none">
          Recent wildlife sightings
        </h2>

        <p className="col-span-2 mb-4 text-sm leading-relaxed md:absolute md:left-[8.9%] md:top-[29.5%] md:mb-0 md:w-[41%] md:text-[1.1cqw] md:leading-[1.65]">
          Wildlife sightings include elephant, kudu, sable antelope, zebra, wildebeest, the rare and endangered roan antelope, buffalo, lion, leopard, hyena, and many other wildlife species.
        </p>

        {photos.map(([file, alt, left, top, width, height]) => (
          <img
            key={file}
            src={`/images/${file}`}
            alt={alt}
            className="h-48 w-full object-cover md:absolute md:h-[var(--h)] md:w-[var(--w)] md:left-[var(--l)] md:top-[var(--t)]"
            style={{ '--l': left, '--t': top, '--w': width, '--h': height }}
          />
        ))}
      </div>
    </section>
  )
}