import { Logo, Whatsapp } from '../icons/icons'
import { nav } from '../data/data'

const Header = () => {
  const OpenMenu = () => {
    document.querySelector('.nav-menu').classList.toggle('active')
    const nav = document.querySelector('nav')
    nav?.classList.toggle('hidden')
  }

  return (
    <section className="m-auto max-w-6xl px-6 flex gap-x-4">
      <div className="flex-grow text-black py-8">
        <a href="#hero" className="scroll hover:text-gray-600 logo">
          <Logo />
        </a>
      </div>
      <div className="text-sm py-8">
        <nav className="fade-in hidden lg:mt-9 lg:block" onClick={OpenMenu}>
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
      <div className="flex flex-grow justify-end items-center lg:items-start gap-x-4">
        <div className="text-sm text-white hidden lg:inline-block">
          <div className="bg-black px-4 py-2 flex items-center">
            <div className="w-8"></div>
            <div className="w-auto">VENTAS</div>
          </div>
          <div className="bg-tertiary px-4 py-2 flex items-center">
            <div className="w-8">
              <a
                href="https://wa.me/5491150631324"
                className="hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Whatsapp />
              </a>
            </div>
            <div className="w-auto">
              <span className="block">Inmobiliaria Casa Práctika</span>
              <a
                href="https://www.casapractika.com.ar/"
                className="font-bold block hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                casapractika.com.ar
              </a>
            </div>
          </div>
        </div>

        <div className="nav-menu mt-6" onClick={OpenMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Header
