'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { Image } from '../atoms/ui/image'
import PhotoDog from 'public/photo_dog.svg'
import LogoDogSvg from 'public/logo_dog.svg'
import { useFindPetsByCity } from '@/service/hooks/useFindPetsByCity'

export function ListPets() {
  const params = useParams()
  const searchParams = useSearchParams().toString()

  const cityId = params.cityId as string

  const { data: pets, isLoading } = useFindPetsByCity({
    cityId,
    searchParams,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className="min-h-screen w-full">
      <ul className="text-black flex flex-wrap gap-4 justify-start items-start">
        {pets?.map((pet) => (
          <div
            key={pet.id}
            className="bg-white w-72 h-52 rounded-3xl flex flex-col items-center p-1"
          >
            <Image src={PhotoDog} alt="Foto do dog" className="w-full" />
            <div className="bg-app-red-500 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 border-2 border-white">
              <Image src={LogoDogSvg} width={15} alt="Foto do dog" />
            </div>
            <span className="font-semibold mt-2">{pet.name}</span>
          </div>
        ))}
      </ul>
    </section>
  )
}
