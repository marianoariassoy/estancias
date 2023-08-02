import About from './components/About'
import Banner from './components/Banner'
import Barrios from './components/Barrios'
import Clubes from './components/Clubes'
import Colegio from './components/Colegio'
import Comollegar from './components/Comollegar'
import Contacto from './components/Contacto'
import Elpueblo from './components/Elpueblo'
import Home from './components/Home'
import Layout from './layout/Layout'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Barrios />
      <Banner />
      <Clubes />
      <Elpueblo />
      <Colegio />
      <Comollegar />
      <Contacto />
    </Layout>
  )
}

export default App
