import Header from './Header'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="w-full z-50 px-4">
        <Header />
      </header>
      <main className="px-4">{children}</main>
      <footer className="px-4">
        <Footer />
      </footer>
    </>
  )
}

export default Layout
