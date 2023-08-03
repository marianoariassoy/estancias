import { Miscelanea } from '../icons/icons'
import { clubes } from '../data/data'
import ClubesItem from './ClubesItem'
const Clubes = () => {
  return (
    <section id="clubes">
      <div className="container m-auto max-w-5xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-lightblue">
            <Miscelanea />
          </div>
          <h1 className="text-primary mb-6 font-cormorant uppercase text-3xl tracking-widest">Clubes</h1>
          <h2 className="text-primary mb-6 text-xl font-medium">Deportes y actividades entre amigos</h2>
          <p className="text-wrap max-w-3xl m-auto">
            Estancias ofrece un amplio abanico de posibilidades a la hora de hablar de deportes. Además de tres clubes
            muy completos, ya con 15 y hasta 20 años de funcionamiento, También contará con una escuela de actividades
            nauticas e hípicas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-y-8">
          {clubes.map((club) => (
            <ClubesItem key={club.id} club={club} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clubes
