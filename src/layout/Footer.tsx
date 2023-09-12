import { Logo, Whatsapp } from '../icons/icons'
const Footer = () => {
  return (
    <div className="m-auto max-w-6xl py-20 px-6">
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-black pb-12 mb-12 [&>div>div>span>a]:underline">
        <div className="col logo">
          <Logo />
        </div>
        <div className="col text-sm flex flex-col gap-y-4">
          <div>
            <strong className="font-semibold block text-black">ADMINISTRACIÓN ESTANCIAS DEL RÍO</strong>
            <span className="block">(02304) 404640</span>
          </div>
          <div>
            <strong className="font-semibold block text-black">ADMINISTRACIÓN ESTANCIAS GOLF</strong>
            <span className="block">(+54 9 11) 5063-1348</span>
          </div>
          <div>
            <strong className="font-semibold block text-black">OFICINA ATENCIÓN PROPIETARIO</strong>
            <span className="block">(0230) 4457541 / 4457873 / 4232754 Interno: 700</span>
            <span className="block">
              <a href="mailto:atencionalpropietario.estancias@gmail.com">atencionalpropietario.estancias@gmail.com</a>
            </span>
          </div>
          <div>
            <strong className="font-semibold block text-black">AUTORIZACIONES</strong>
            <span className="block">(0230) 4457541 / 4457873 / 4232754</span>
            <span className="block">15 70981003 (sólo mensajes WhatsApp)</span>
            <span className="block">
              <a
                href="mailto:autorizaciones.estancias@gmail.com
"
              >
                autorizaciones.estancias@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="col text-sm flex flex-col gap-y-4">
          <div>
            <strong className="font-semibold block text-black">INTENDENCIA</strong>
            <span className="block">(0230) 4457541 / 4457873 / 4232754</span>
            <span className="block">15 49935034 (sólo mensajes WhatsApp)</span>
            <span className="block">
              <a
                href="mailto:intendencia.estancias@gmail.com
"
              >
                intendencia.estancias@gmail.com
              </a>
            </span>
          </div>
          <div>
            <strong className="font-semibold block text-black">ATENCIÓN AL PROPIETARIO 24 HS</strong>
            <span className="block">15 49944176 (sólo mensajes WhatsApp)</span>
            <span className="block">
              <a href="mailto:intendencia.estancias@gmail.com">intendencia.estancias@gmail.com</a>
            </span>
          </div>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div>
          <img src="./images/casa.svg" alt="Logo Casa Practika" />
        </div>
        <div className="text-sm">
          <h3 className="text-tertiary text-xl font-cormorant">VENTAS</h3>
          <div>(+54 9 11) 5063-1324</div>
          <div className="flex gap-x-2 items-center justify-start lg:justify-start">
            Contactanos vía whatsapp
            <a
              href="https://wa.me/5491150631324"
              className="text-white bg-[#31ba45] h-8 w-8 rounded-full flex justify-center items-center hover:text-white hover:bg-black hover:shadow-xl transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
