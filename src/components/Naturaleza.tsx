import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../icons/icons'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'

const properties = {
  arrows: true,
  autoplay: true,
  indicators: false,
  transitionDuration: 400,
  infinite: true,

  prevArrow: (
    <div className="absolute place-content-center ml-6 text-white transition-all text-secondary-hover hidden lg:grid">
      <Back />
    </div>
  ),
  nextArrow: (
    <div className="absolute place-content-center mr-24 text-white transition-all text-secondary-hover hidden lg:grid">
      <Forward />
    </div>
  ),
}

const Naturaleza = () => {
  const { data, loading } = useFetch(`/fotos`)

  return (
    <section className="bg-lightgreen bg-no-repeat bg-bottom" id="naturaleza">
      <div className="container m-auto max-w-6xl px-6 py-24 lg:pb-40 relative">
        {loading ? (
          <div className="w-full lg:w-3/5">
            <Loader />
          </div>
        ) : (
          <div className="w-full lg:w-3/5">
            <Slide {...properties}>{data && data.map((data) => <img key={data.id} src={data.image} />)}</Slide>
          </div>
        )}

        <div className="p-8 pb-16 lg:p-16 pt-8 bg-secondary w-full lg:max-w-lg lg:right-6 lg:top-1/4 lg:absolute">
          <h1 className="mb-6 font-cormorant uppercase text-3xl tracking-widest text-lightgreen">NATURALEZA</h1>
          <h2 className="text-black font-medium">Un paisaje de ensueño</h2>
          <p className="text-wrap">
            Estancias te permite disfrutar de un entorno natural pampeano con gran calidad paisajística. Ligeras
            ondulacione
          </p>
        </div>
      </div>
    </section>
  )
}

export default Naturaleza
