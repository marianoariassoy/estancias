const Colegio = () => {
  return (
    <section className="bg-cover bg-no-repeat" id="colegio">
      <div className="container m-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-lightblue">
            <img src="./images/logo-colegio.png" alt="Logo Colegio" />
          </div>
          <h1 className="mb-6 font-cormorant uppercase text-3xl tracking-widest">COLEGIO LOS ROBLES</h1>
          <h2 className="text-tertiary mb-6 text-xl font-medium">El colegio de Estancias</h2>
          <p className="text-wrap max-w-3xl m-auto mb-6">
            Un colegio que se ha forjado a través de muchos años de experiencia de su fundador y del equipo de
            directivos, docentes y profesionales que lo acompañan.
            <br /> <br />
            La visión del Colegio surge de contemplar en profundidad la realidad del hombre, tanto del varón como de la
            mujer teniendo en cuenta el carácter dinámico de un ser en continuo crecimiento. Más de 1200 alumnos.
          </p>
          <a
            href="http://www.losrobles.esc.edu.ar/sedepilar"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-tertiary px-4 py-2 rounded-md font-medium  hover:shadow-lg  mb-4 lg:m-0 text-sm"
          >
            WWW.LOSROBLES.ESC.EDU.AR/SEDEPILAR
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-2" id="colegio-images">
          <img src="./images/colegio-1.jpg" className="w-full" alt="Fotografía del colegio y alumnos" />
          <img src="./images/colegio-2.jpg" className="w-full" alt="Fotografía del colegio y alumnos" />
          <img src="./images/colegio-3.jpg" className="w-full" alt="Fotografía del colegio y alumnos" />
          <img src="./images/colegio-4.jpg" className="w-full" alt="Fotografía del colegio y alumnos" />
        </div>
      </div>
    </section>
  )
}

export default Colegio
