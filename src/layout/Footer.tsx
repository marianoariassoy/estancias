import { Logo, Whatsapp, Instagram } from '../icons/icons'
import useFetch from '../hooks/useFetch'

type DataProps = {
  data: null | Array<{ id: number; title: string; text: string; url: string }>
  loading: boolean
}

const Footer = () => {
  const { data, loading } = useFetch(`/contactos`) as DataProps
  const { data: dataCasa, loading: loadingCasa } = useFetch(`/contactos/casapractika`) as DataProps

  return (
    <div className="m-auto max-w-6xl py-20 px-6 text-center lg:text-left">
      <section className="w-full flex flex-col lg:flex-row gap-y-8 border-b border-black pb-12 mb-12 [&>div>div>span>a]:underline">
        <div className="col lg:w-1/4">
          <div className="inline-block logo">
            <Logo />
          </div>
        </div>
        <div className="col text-sm grid lg:grid-cols-2 gap-x-12 gap-y-4 lg:w-3/4">
          {!loading &&
            data.map((item) => (
              <article key={item.id}>
                <strong className="font-semibold block text-black">{item.title}</strong>
                <span className="block">{item.text}</span>
                {item.url && (
                  <a href={item.url} target="_blank" className="underline hover:text-black" rel="noopener noreferrer">
                    {item.url}
                  </a>
                )}
              </article>
            ))}
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row gap-y-8 items-start">
        <div className="col w-full lg:w-1/4">
          <a
            href="https://www.casapractika.com.ar/"
            className="hover:opacity-80 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/casa.svg" alt="Logo Casa Practika" />
          </a>
        </div>
        <div className="col text-sm w-full lg:w-3/4">
          <h3 className="text-tertiary text-xl font-cormorant uppercase">{!loadingCasa && dataCasa[0].title}</h3>
          <div>{!loadingCasa && dataCasa[0].text}</div>
          <div className="flex gap-x-2 items-center justify-center lg:justify-start">
            Contactanos vía whatsapp
            <a
              href={`https://wa.me/5491150631324`}
              className="text-white bg-[#31ba45] h-8 w-8 rounded-full flex justify-center items-center hover:text-white hover:bg-black hover:shadow-xl transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.instagram.com/casapractika/?igshid=MWZjMTM2ODFkZg%3D%3D"
              className="text-white bg-tertiary h-8 w-8 rounded-full flex justify-center items-center hover:text-white hover:bg-black hover:shadow-xl transition-all"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>

          <a
            href="https://www.casapractika.com.ar/"
            className="font-bold block hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            casapractika.com.ar
          </a>
        </div>
      </section>
    </div>
  )
}

export default Footer
