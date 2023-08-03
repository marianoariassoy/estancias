const Comollegar = () => {
  return (
    <section id="comollegar">
      <div className="container m-auto max-w-6xl px-6 py-24 lg:flex">
        <div className="w-full lg:w-2/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13155.429301026428!2d-58.9949419147583!3d-34.481143491408616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc83b839fe5d67%3A0xee013bb3d23ed9af!2sEstancias%20Del%20Pilar!5e0!3m2!1ses-419!2sar!4v1691092343412!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
        <div className="text-center lg:text-left lg:w-1/3 lg:pl-16">
          <div className="flex justify-center mt-8 lg:m-0 lg:justify-start">
            <img src="./images/img-map.jpg" />
          </div>

          <h1 className="mb-6 font-cormorant uppercase text-3xl tracking-widest text-blue mt-6">CÓMO LLEGAR</h1>
          <h2 className="mb-4">Zona No na (ramal Pilar) km 52,5</h2>
          <strong className="font-medium">Cómo llegar:</strong>
          <p className="text-wrap text-sm">
            En Panamericana (ramal Pilar) km 52,5 salir de autopista, doblar a la izquierda por debajo de la ruta.
            Avanzar hacia la derecha 200mts, cruzar la ruta 8. Seguir derecho pasando una casilla de guardia. Avanzar
            5km hasta llegar a la entrada de Estancias.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Comollegar
