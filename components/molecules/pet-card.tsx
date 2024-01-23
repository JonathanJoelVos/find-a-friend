import { Image } from '../atoms/ui/image'
import { Pet } from '@/service/types/pet-service'

import PhotoDog from 'public/photo_dog.svg'
import LogoDogSvg from 'public/logo_dog.svg'
import Link from 'next/link'

interface PetCardProps {
  pet: Pet
}
export function PetCard({ pet }: PetCardProps) {
  return (
    <Link
      href={`/pets/infos/${pet.id}`}
      key={pet.id}
      className="group hover:bg-app-blue-700 hover:cursor-pointer bg-white w-72 h-52 rounded-3xl flex flex-col items-center p-1"
    >
      <Image src={PhotoDog} alt="Foto do dog" className="w-full" />
      <div className="bg-app-red-500 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 border-2 border-white group-hover:border-app-blue-700">
        <Image src={LogoDogSvg} width={15} alt="Foto do dog" />
      </div>
      <span className="font-semibold mt-2 group-hover:text-zinc-100">
        {pet.name}
      </span>
    </Link>
  )
}
