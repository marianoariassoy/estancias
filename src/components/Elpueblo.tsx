import { Back, Forward } from '../icons/icons'
import ElpuebloItem from './ElpuebloItem'
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
  slidesToShow: 3,
  slidesToScroll: 3,
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

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

const Elpueblo = () => {
  const { data, loading } = useFetch(`/comercios`)

  return (
    <section className="bg-no-repeat bg-bottom" id="elpueblo">
      <div className="container m-auto max-w-5xl px-6 pb-24 pt-12">
        <div className="mb-16 lg:flex items-center">
          <div className="lg:w-1/3 flex justify-center mb-8 lg:m-0">
            <img src="./images/elpueblo.jpg" alt="Logo El Pueblo" />
          </div>
          <div className="lg:w-2/3 lg:pl-6">
            <h1 className="text-blue mb-6 font-cormorant uppercase text-3xl tracking-widest">EL PUEBLO</h1>
            <h2 className="text-blue text-xl font-medium">Un lugar de encuentro</h2>
            <p className="text-wrap  mb-4">
              Un espacio para toda la comunidad, donde la gastronomía, el entretenimiento y las actividades sociales
              tienen un rol protagónico.
            </p>
            <p className="text-wrap text-sm">
              Oficinas - Locales - Escuela Paisajismo Pampa Infinita - Supermercado completo Restaurante - Carnicería -
              Iglesia - Consultorios Profesionales - Inmobiliarias - Peluquería Casa de artículos de Computación -
              Lavandería de ropa - Casas de Decoración Casa de venta de Ropa - Centro Cultural – Jardín Maternal
            </p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <Slide {...properties} responsive={responsiveSettings}>
            {data && data.map((data) => <ElpuebloItem key={data.id} data={data} />)}
          </Slide>
        )}
      </div>
    </section>
  )
}

export default Elpueblo
