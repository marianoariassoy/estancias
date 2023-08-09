import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../icons/icons'

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
  return (
    <section className="bg-lightgreen bg-no-repeat bg-bottom" id="naturaleza">
      <div className="container m-auto max-w-6xl px-6 py-24 lg:pb-40 relative">
        <div className="w-full lg:w-3/5">
          <Slide {...properties}>
            <img
              src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slide>
        </div>
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
