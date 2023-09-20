import useFetch from '../hooks/useFetch'

const Colegio = () => {
  const { data: dataTexts, loading: loadingTexts } = useFetch(`/textos`)

  return (
    <section className="bg-cover bg-no-repeat" id="colegio">
      <div className="container m-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-lightblue">
            <img src="./images/logo-colegio.png" alt="Logo Colegio" />
          </div>
          <h1 className="mb-6 font-cormorant uppercase text-3xl tracking-widest">COLEGIO LOS ROBLES</h1>
          <h2 className="text-tertiary mb-6 text-xl font-medium">El colegio de Estancias</h2>
          <p className="text-wrap max-w-3xl m-auto mb-6 whitespace-pre-wrap">{!loadingTexts && dataTexts[4].text}</p>
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
          <img
            src="https://www.estanciasdelpilar.com/backend/images-statics/colegio-1.jpg"
            className="w-full"
            alt="Fotografía del colegio y alumnos"
          />
          <img
            src="https://www.estanciasdelpilar.com/backend/images-statics/colegio-2.jpg"
            className="w-full"
            alt="Fotografía del colegio y alumnos"
          />
          <img
            src="https://www.estanciasdelpilar.com/backend/images-statics/colegio-3.jpg"
            className="w-full"
            alt="Fotografía del colegio y alumnos"
          />
          <img
            src="https://www.estanciasdelpilar.com/backend/images-statics/colegio-4.jpg"
            className="w-full"
            alt="Fotografía del colegio y alumnos"
          />
        </div>
      </div>
    </section>
  )
}

export default Colegio
