import Header from './Header'
import Footer from './Footer'
import { Whatsapp, Instagram } from '../icons/icons'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="fixed w-full z-50 bg-white shadow-md">
        <div className="flex text-sm text-white w-full lg:hidden">
          <div className="bg-black px-6 py-3 flex-grow basis-0 ">
            <span className="font-bold tracking-widest mr-2">VENTAS</span>
            <span>Inmobiliaria Casa Práctika</span>
          </div>
          <div className="bg-tertiary px-6 flex items-center gap-x-4 justify-end">
            <a
              href="https://wa.me/5491150631324"
              className="hover:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.instagram.com/casapractika/?igshid=MWZjMTM2ODFkZg%3D%3D"
              className="hover:opacity-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>

        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
