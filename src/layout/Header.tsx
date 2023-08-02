import { Logo, Whatsapp } from '../icons/icons'
import { nav } from '../data/data'

const Header = () => {
  return (
    <section className="m-auto max-w-6xl py-4 flex gap-x-4 items-center">
      <div className="flex-grow text-black ">
        <a href="#hero" className="scroll hover:text-gray-600">
          <Logo />
        </a>
      </div>
      <div className="pt-9">
        <nav>
          <ul className="flex items-center gap-x-8 text-sm font-raleway font-bold text-black">
            {nav.map((item) => (
              <a href={item.path} key={item.id} className="scroll hover:underline underline-offset-4 decoration-2">
                {item.title}
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-grow justify-end pt-9">
        <a
          href="http://"
          className="flex items-center gap-x-2 bg-tertiary text-white px-4 py-2 rounded-md font-medium text-sm hover:text-white hover:shadow-lg hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          VENTAS <Whatsapp />
        </a>
      </div>
    </section>
  )
}

export default Header
