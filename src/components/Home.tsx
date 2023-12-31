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
    <section className="relative mt-32 lg:mt-24 slider-home bg-gray-100" id="hero">
      {!loading && <Slider data={data} />}
    </section>
  )
}

export default Home
