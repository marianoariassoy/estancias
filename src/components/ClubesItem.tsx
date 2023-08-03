type Club = {
  id: number
  title: string
  description: string
  image: string
  url: string
}

const ClubesItem = ({ club }: { club: Club }) => {
  return (
    <article className="lg:px-4">
      <div className="aspect-video">
        <img src={club.image} alt={club.title} className="h-full w-full object-cover" />
      </div>
      <div className="py-6">
        <h2 className="font-cormorant uppercase text-2xl tracking-widest mb-2">{club.title}</h2>
        <p className="text-wrap text-sm">{club.description}</p>
      </div>
      {club.url && (
        <a
          href={club.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray text-white px-4 py-2 rounded-md font-medium hover:text-white hover:shadow-lg hover:bg-black mb-4 lg:m-0 text-sm"
        >
          {club.url}
        </a>
      )}
    </article>
  )
}

export default ClubesItem
