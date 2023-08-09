import { Logo, Whatsapp } from '../icons/icons'
const Footer = () => {
  return (
    <section className="m-auto max-w-4xl py-12 px-6 flex-col flex items-center justify-center lg:flex-row text-center lg:text-left">
      <div className="lg:pr-20 mb-6 logo">
        <Logo />
      </div>
      <div className="lg:pl-20 lg:border-l border-black text-sm ">
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
          <div className="flex gap-x-2 items-center justify-center lg:justify-start">
            Contactanos vía whatsapp
            <a
              href="https://wa.me/549115063-1324"
              className="text-white bg-[#31ba45] h-8 w-8 rounded-full flex justify-center items-center hover:text-white hover:bg-black hover:shadow-xl transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
