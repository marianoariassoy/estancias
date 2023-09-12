import { Miscelanea, Back, Forward } from '../icons/icons'
import AboutItem from './AboutItem'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'

const properties = {
  arrows: true,
  autoplay: false,
  indicators: false,
  transitionDuration: 400,
  infinite: true,
  prevArrow: (
    <div className="absolute place-content-center -ml-10 lg:-ml-14 text-black transition-all text-secondary-hover hidden lg:grid">
      <Back />
    </div>
  ),
  nextArrow: (
    <div className="absolute place-content-center -mr-10 lg:-mr-14 text-black transition-all text-secondary-hover hidden lg:grid">
      <Forward />
    </div>
  ),
}

const About = () => {
  const { data, loading } = useFetch(`/novedades`)

  return (
    <section className="bg-primary" id="about">
      <div className="container m-auto max-w-3xl px-12 pt-24 pb-16 text-white text-center ">
        <div className="flex justify-center mb-12 text-secondary">
          <Miscelanea />
        </div>

        <div className="font-semibold mb-8 text-xl">
          Vivir rodeado de naturaleza, seguridad con tecnología de última generación y la mayor variedad de deportes.
        </div>
        <div>
          <p className="text-wrap">
            El lujo esencial de poder vivir en un ecosistema semejante, rodeado de amplias y extensas areas verdes y
            lagunas o cruzarse con liebres, lechuzas y zorros.
            <br />
            <br />
            Chicos en bici yendo al colegio, gente caminando con amigos o haciendo deportes y cabalgatas, son las
            imágenes más comunes de Estancias.
            <br />
            <br />
            Seguridad con tecnología de última generación.
            <br />
            <br />
            Disfrutar de El Pueblo, tomar un café o comer en restaurantes y encontrarse con amigos.
          </p>
        </div>
      </div>

      <div className="container m-auto max-w-6xl px-6 pb-24">
        {loading ? (
          <Loader />
        ) : (
          <Slide {...properties}>
            {data.map((data) => (
              <AboutItem data={data} key={data.id} />
            ))}
          </Slide>
        )}
      </div>
    </section>
  )
}

export default About
