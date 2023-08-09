import { useEffect } from 'react'
import Slider from './Slider'
import useFetch from '../hooks/useFetch'
import scroll from '../utils/scroll'

type DataProps = {
  data: null | Array<{ id: number; image: string }>
  loading: boolean
}

const Home = () => {
  const { data, loading } = useFetch(`/home`) as DataProps

  useEffect(() => {
    scroll()
  }, [])

  return (
    <section className="relative mt-28" id="hero">
      <div className="absolute w-full h-full text-center grid content-center text-white z-10 bg-black/25 px-6">
        <div>
          <h1 className="text-5xl lg:text-6xl font-cormorant mb-4 tracking-widest">EXPERIENCIA ESTANCIAS</h1>
          <h2 className="text-xl lg:text-2xl font-raleway font-bold">
            <span>Rodeado de naturaleza.</span>
            <span className="block lg:inline-block lg:ml-2">Sensación de libertad. </span>
            <span className="block">Todos los deportes y servicios.</span>
          </h2>
        </div>
      </div>
      {!loading && <Slider data={data} />}
    </section>
  )
}

export default Home
