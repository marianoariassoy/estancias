import { Plus } from '../icons/icons'
import TextHTML from '../hooks/useHTML'
import ImageComponent from './ImageComponent'

type Data = {
  id: number
  text: string
  image: string
  logo: string
  whatsapp: string
  web: string
}

const ElpuebloItem = ({ data }: { data: Data }) => {
  return (
    <article className="lg:px-4">
      <div className="aspect-video">
        <ImageComponent src={data.image} alt="" />
      </div>
      <div className="bg-white text-center h-72 flex flex-col justify-between">
        <div className="px-6">
          {data.logo && (
            <div className="flex justify-center">
              <img src={data.logo} className="mb-2 w-full" />
            </div>
          )}
          <div className="text-wrap text-sm">
            <TextHTML text={data.text} />
          </div>
        </div>
        <div>
          {+data.whatsapp > 0 ? (
            <a
              href={`https://api.whatsapp.com/send?phone=${data.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-black text-white px-4 py-3 font-bold font-raleway hover:text-white hover:shadow-lg hover:bg-black lg:m-0 text-sm justify-center flex items-center gap-x-2"
            >
              CONTACTAR <Plus />
            </a>
          ) : (
            data.web && (
              <a
                href={data.web}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-black text-white px-4 py-3 font-bold font-raleway hover:text-white hover:shadow-lg hover:bg-black lg:m-0 text-sm justify-center flex items-center gap-x-2"
              >
                CONTACTAR <Plus />
              </a>
            )
          )}
        </div>
      </div>
    </article>
  )
}

export default ElpuebloItem
