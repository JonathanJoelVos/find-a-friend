import { TitleHome } from '../molecules/title-home'
import { PetDescription } from '../molecules/pet-description'
import { FindForm } from '../molecules/find-form'
import { ReactNode } from 'react'

interface HeroHomeProps {
  imageSrc: string
  title: string | ReactNode
  description?: string
}

export function HeroHome({ imageSrc, title, description }: HeroHomeProps) {
  return (
    <main className="w-full grid justify-center gap-3 lg:-mt-5 max-w-7xl lg:grid-cols-2 lg:items-end md:justify-start">
      <TitleHome>{title}</TitleHome>
      <PetDescription imageSrc={imageSrc} description={description} />
      <FindForm />
    </main>
  )
}
