import { ReactNode } from 'react'
import { HeaderHome } from '../organisms/header-home'
import { HeroHome } from '../organisms/hero-home'

interface HomeTemplateProps {
  image: string
  description?: string
  title: string | ReactNode
}

export function HomeTemplate({ image, title, description }: HomeTemplateProps) {
  return (
    <div className="bg-app-red-500 min-h-screen h-full p-10 md:px-16 flex flex-col justify-center items-center gap-5">
      <HeaderHome />
      <HeroHome imageSrc={image} description={description} title={title} />
    </div>
  )
}
