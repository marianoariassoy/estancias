import { Plus, LogoCasa } from '../icons/icons'

const AboutItem = () => {
  return (
    <article className="lg:grid grid-cols-2">
      <div className="aspect-video ">
        <img
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="object-center h-full w-full"
        />
      </div>
      <div className="bg-secondary p-8 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-primary mb-2 font-cormorant uppercase text-2xl">Vilhas de Golf</h2>
          <p className="text-wrap text-sm mb-4">
            Ubicado en Estancias Golf. Condominios tipo casa con jardín propio. Diseñado para descansar y disfrutar de
            las mejores y extensas vistas a lagunas, fairways de golf y a un gran parque central. Vilhas de 1, 2 y 3
            dormitorios en suite.
          </p>
        </div>
        <div className="lg:flex justify-between w-full items-center">
          <a
            href="#contact"
            className="scroll flex items-center gap-x-2 bg-tertiary text-white px-4 py-2 rounded-md font-medium hover:text-white hover:shadow-lg hover:bg-black mb-4 lg:m-0 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACTÁNOS PARA MÁS INFO <Plus />
          </a>
          <LogoCasa />
        </div>
      </div>
    </article>
  )
}

export default AboutItem
