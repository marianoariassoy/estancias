import { Miscelanea } from '../icons/icons'
import { barrios } from '../data/data'
const Barrios = () => {
  return (
    <section className="bg-secondary" id="barrios">
      <div className="container m-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4 text-primary">
            <Miscelanea />
          </div>
          <h1 className="text-primary mb-6 font-cormorant uppercase text-3xl tracking-widest">Barrios</h1>
          <p className="text-wrap max-w-3xl m-auto">
            En Estancias podes recorrer en bici o a pie 450 hectáreas en 8 exclusivos barrios, con ya más de 1100 casas
            y condominios construidos.
          </p>
        </div>

        <div className="lg:flex">
          <div className="lg:w-3/5 ">
            <img src="./images/map.jpg" alt="Mapa de Estancias" className="w-full" />
          </div>
          <div className="text-sm lg:w-2/5 mt-8 lg:mt-14 lg:pl-6">
            {barrios.map((barrio) => (
              <p key={barrio.id} className="mb-4 text-wrap">
                <span className="font-semibold">{barrio.title}:</span> {barrio.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Barrios
