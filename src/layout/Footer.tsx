import { Logo, Whatsapp } from '../icons/icons'
const Footer = () => {
  return (
    <section className="m-auto max-w-4xl py-12 px-6 lg:flex items-center justify-center">
      <div className="pr-20 mb-6 logo">
        <Logo />
      </div>
      <div className="lg:pl-20 lg:border-l border-black text-sm">
        <div className="mb-4">
          <h3 className="text-lightblue text-xl font-cormorant ">ESTANCIAS</h3>
          <div>
            <strong className="font-semibold">Administración</strong> (02304) 232754 / 457873 / 457541
          </div>
          <div>
            <strong className="font-semibold">Adm. Estancias del Río</strong> (02304) 404640
          </div>
          <div>
            <strong className="font-semibold">Adm. Estancias Golf</strong> (+54 9 11) 5063-1348
          </div>
        </div>
        <div>
          <h3 className="text-tertiary text-xl font-cormorant ">VENTAS</h3>
          <div>(+54 9 11) 5063-1324</div>
          <div>Contactanos vía whatsapp</div>
        </div>
      </div>
    </section>
  )
}

export default Footer
