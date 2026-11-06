
const columns = [
  { title: 'Useful information', items: ['Travel information', 'Safari logistics', 'Privacy policy', 'Terms and conditions'] },
  { title: 'Sitemap', items: ['Home', 'About', 'Suggested itenaries', 'Gallery'] },
  { title: 'Get in touch', items: ['Plan your safari', 'Contact us', 'Careers'] },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white [container-type:inline-size]">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-6 pb-8 pt-10 md:grid-cols-[158fr_152fr_130fr_217fr] md:gap-0 md:pb-[1.9cqw] md:pl-[5.7cqw] md:pr-[5.3cqw] md:pt-[3.9cqw]">
        {columns.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold italic md:h-[3.25cqw] md:text-[max(11px,1.5cqw)] md:leading-[3.25cqw]">
              {c.title}
            </h4>
            <ul className="mt-3 space-y-2 text-xs font-light md:mt-[0.1cqw] md:space-y-0 md:text-[max(10px,1.3cqw)] md:leading-[3cqw]">
              {c.items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-sm font-semibold italic md:h-[3.25cqw] md:text-[max(11px,1.5cqw)] md:leading-[3.25cqw]">
            Sign up for our newsletter
          </h4>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex md:mt-[2.7cqw]">
            <input
              type="email"
              placeholder="Email"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-white py-2.5 pl-4 text-xs text-neutral-800 placeholder-neutral-400 outline-none md:h-[3.4cqw] md:flex-none md:w-[21.4cqw] md:py-0 md:pl-[3.5cqw] md:text-[max(10px,1.1cqw)]"
            />
            <button
              type="submit"
              className="bg-[#3B3A36] px-5 text-xs font-semibold italic text-white transition-colors hover:bg-black md:w-[8cqw] md:px-0 md:text-[max(10px,1.3cqw)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-white/90 py-3 text-[10px] font-light md:h-[4.5cqw] md:gap-[0.6cqw] md:py-0 md:text-[max(9px,1.1cqw)]">
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white text-[8px] font-semibold leading-none md:h-[1.6cqw] md:w-[1.6cqw] md:text-[max(7px,1cqw)]">
          C
        </span>
        Copyright 2022 Nyamatusi camp. All rights reserved
      </div>
    </footer>
  )
}