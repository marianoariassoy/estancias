import TextHTML from '../hooks/useHTML'
import ImageComponent from './ImageComponent'

type Club = {
  id: number
  title: string
  text: string
  image: string
  url: string
}

const ClubesItem = ({ data }: { data: Club }) => {
  return (
    <article className="lg:px-4">
      <div className="aspect-video">
        <ImageComponent src={data.image} alt={data.title} />
      </div>
      <div className="py-6">
        <h2 className="font-cormorant uppercase text-2xl tracking-widest mb-2">{data.title}</h2>
        <div className="text-wrap text-sm">
          <TextHTML text={data.text} />
        </div>
      </div>
      {data.url && (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray text-white px-4 py-2 rounded-md font-medium hover:text-white hover:shadow-lg hover:bg-black mb-4 lg:m-0 text-sm"
        >
          Sitio web
        </a>
      )}
    </article>
  )
}

export default ClubesItem
