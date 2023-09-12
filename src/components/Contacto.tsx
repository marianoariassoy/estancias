import Form from './Form'

const Contacto = () => {
  return (
    <section className="bg-gray-200 bg-no-repeat bg-cover bg-center" id="contacto">
      <div className="container m-auto max-w-6xl px-6 py-24 lg:flex items-start">
        <div className="w-full lg:w-1/2">
          <h1 className="font-cormorant uppercase text-3xl tracking-widest text-white text-center mb-16 lg:m-0">
            CONTACTANOS
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacto
