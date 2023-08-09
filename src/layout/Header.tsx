import { Logo, Whatsapp } from '../icons/icons'
import { nav } from '../data/data'

const Header = () => {
  const OpenMenu = () => {
    document.querySelector('.nav-menu').classList.toggle('active')
    const nav = document.querySelector('nav')
    nav?.classList.toggle('hidden')
  }

  return (
    <section className="m-auto max-w-6xl p-6 px-6 flex gap-x-4 items-center">
      <div className="flex-grow text-black ">
        <a href="#hero" className="scroll hover:text-gray-600 logo">
          <Logo />
        </a>
      </div>
      <div className="pt-9 text-sm">
        <nav className="fade-in hidden lg:block" onClick={OpenMenu}>
          <ul className="flex items-center gap-x-8 font-raleway font-bold text-black">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={item.path} className="scroll hover:underline underline-offset-4 decoration-2">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-grow justify-end pt-9 text-sm items-center gap-x-4">
        <a
          href="https://wa.me/549115063-1324"
          className="flex items-center gap-x-2 bg-tertiary text-white px-4 py-2 rounded-md font-medium hover:text-white hover:shadow-lg hover:bg-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          VENTAS <Whatsapp />
        </a>

        <div className="nav-menu" onClick={OpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Header
