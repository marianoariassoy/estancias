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
    <div className="absolute opacity-50 lg:opacity-100 place-content-center ml-6 text-white transition-all grid hover:text-black hover:opacity-100">
      <Back />
    </div>
  ),
  nextArrow: (
    <div className="absolute opacity-50 lg:opacity-100 place-content-center mr-6 lg:mr-24 text-white transition-all grid hover:text-black  hover:opacity-100">
      <Forward />
    </div>
  ),
}

const Naturaleza = () => {
  const { data, loading } = useFetch(`/fotos`)
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`)

  return (
    <section className="bg-lightgreen bg-no-repeat bg-bottom text-center lg:text-left" id="naturaleza">
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
          <p className="text-wrap whitespace-pre-wrap">{!loadingTexts && dataTexts[5].text}</p>
        </div>
      </div>
    </section>
  )
}

export default Naturaleza
