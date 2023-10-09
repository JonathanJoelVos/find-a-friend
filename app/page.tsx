import DogsImage from 'public/dogs.svg'
import { HomeTemplate } from '@/components/templates/home-template'

export default function Home() {
  return (
    <HomeTemplate
      image={DogsImage}
      description="Encontre o animal de estimação ideal para seu estilo de vida!"
      title={
        <>
          <span className="md:block">Leve</span>
          <span className="md:block ml-1 mr-1">a felicidade</span>
          <span className="md:block">para o seu lar</span>
        </>
      }
    />
  )
}
