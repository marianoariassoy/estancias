import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from './Loader'
import TextHTML from '../hooks/useHTML'

type SliderItemProps = {
  src: string
  alt: string
  title: string
  text: string
}

const SliderItem = ({ src, alt, title, text }: SliderItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className="slider-home flex justify-center items-center w-screen">
      <Loader />
    </div>
  ) : (
    <div className="slider-home relative">
      <div className="absolute w-full h-full text-center grid content-center text-white z-10 bg-black/25 px-6">
        <div className="max-w-3xl m-auto">
          <h1 className="text-4xl lg:text-6xl font-cormorant lg:mb-2 tracking-widest">{title}</h1>
          <div className="lg:text-2xl font-raleway font-bold">
            <TextHTML text={text} />
          </div>
        </div>
      </div>
      <img src={src} alt={alt} className="fade-in h-full w-full object-cover object-center block" />
    </div>
  )
}

type SliderComponentProps = {
  data: Array<{ id: number; image: string }>
}

const Slider = ({ data }: SliderComponentProps) => {
  const properties = {
    transitionDuration: 500,
    arrows: false,
    indicators: true,
  }

  type Image = {
    id: number
    image: string
    title: string
    text: string
  }

  return (
    <div className="w-full slider-home relative">
      <Slide {...properties}>
        {data &&
          data.map((image: Image) => (
            <SliderItem key={image.id} title={image.title} text={image.text} src={image.image} alt="" />
          ))}
      </Slide>
    </div>
  )
}

export default Slider
