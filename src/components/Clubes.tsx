import { Miscelanea } from '../icons/icons'
import ClubesItem from './ClubesItem'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'

const Clubes = () => {
  const { data, loading } = useFetch(`/clubes`)
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`)

  return (
    <section id="clubes">
      <div className="container m-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-lightblue">
            <Miscelanea />
          </div>
          <h1 className="text-primary mb-6 font-cormorant uppercase text-3xl tracking-widest">Clubes</h1>
          <h2 className="text-primary mb-6 text-xl font-medium">Deportes y actividades entre amigos</h2>
          <p className="text-wrap max-w-3xl m-auto whitespace-pre-wrap">{!loadingTexts && dataTexts[2].text}</p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-y-8">
            {data.map((data) => (
              <ClubesItem key={data.id} data={data} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Clubes
