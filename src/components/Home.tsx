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
      {!loading && <Slider data={data} />}
    </section>
  )
}

export default Home
