import { Miscelanea } from '../icons/icons'
import useFetch from '../hooks/useFetch'

const Barrios = () => {
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`)
  const { data, loading } = useFetch(`/barrios`)

  return (
    <section className="bg-secondary" id="barrios">
      <div className="container m-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4 text-primary">
            <Miscelanea />
          </div>
          <h1 className="text-primary mb-6 font-cormorant uppercase text-3xl tracking-widest">Barrios</h1>
          <p className="text-wrap max-w-3xl m-auto whitespace-pre-wrap">{!loadingTexts && dataTexts[1].text}</p>
        </div>
        <div className="lg:flex">
          <div className="lg:w-3/5 ">
            <img
              src="https://www.estanciasdelpilar.com/backend/images-statics/map.jpg"
              alt="Mapa de Estancias"
              className="w-full"
            />
          </div>
          <div className="text-sm lg:w-2/5 mt-8 lg:mt-14 lg:pl-6 text-center lg:text-left">
            {!loading &&
              data.map((barrio) => (
                <p key={barrio.id} className="mb-4 text-wrap">
                  <span className="font-semibold">{barrio.title}:</span> {barrio.text}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Barrios
