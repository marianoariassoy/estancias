import { Plus, LogoCasa } from '../icons/icons'
import TextHTML from '../hooks/useHTML'
import ImageComponent from './ImageComponent'

type Novedades = {
  id: number
  title: string
  text: string
  image: string
}

const AboutItem = ({ data }: { data: Novedades }) => {
  return (
    <article className="lg:grid grid-cols-2">
      <div className="aspect-video">
        <ImageComponent src={data.image} alt={data.title} />
      </div>
      <div className="bg-secondary p-8 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-primary mb-2 font-cormorant uppercase text-2xl">{data.title}</h2>
          <div className="text-wrap text-sm mb-4">
            <TextHTML text={data.text} />
          </div>
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
