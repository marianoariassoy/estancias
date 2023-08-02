import { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Loader from './Loader'

type SliderItemProps = {
  src: string
  alt: string
}

const SliderItem = ({ src, alt }: SliderItemProps) => {
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
    <div className="slider-home">
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
  }

  return (
    <div className="w-full slider-home relative">
      <Slide {...properties}>
        {data && data.map((image: Image) => <SliderItem key={image.id} src={image.image} alt="" />)}
      </Slide>
    </div>
  )
}

export default Slider
