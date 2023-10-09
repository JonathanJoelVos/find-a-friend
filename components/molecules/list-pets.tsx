'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { Image } from '../atoms/ui/image'
import PhotoDog from 'public/photo_dog.svg'
import LogoDogSvg from 'public/logo_dog.svg'
import { useFindPetsByCity } from '@/service/hooks/useFindPetsByCity'
import { Text } from '../atoms/ui/text'
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '../atoms/ui/select'

export function ListPets() {
  const params = useParams()
  const searchParams = useSearchParams().toString()

  const cityId = params.cityId as string

  const { data: pets, isLoading } = useFindPetsByCity({
    cityId,
    searchParams,
  })

  const numberOfPets = pets?.length

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className="min-h-screen w-full text-zinc-100 bg-app-red-100 p-8">
      <header className="p-2 flex items-center justify-between py-12">
        <Text className="text-zinc-800 text-xl">
          {' '}
          Encontre <strong>{numberOfPets} amigos</strong> na sua cidade
        </Text>
        <Select>
          <SelectTrigger className="justify-between w-full p-5 text-app-blue-700 border-none bg-app-red-200 text-sm font-bold max-w-[250px] px-5">
            <SelectValue placeholder="Escolha" />
          </SelectTrigger>
          <SelectContent className="bg-app-red-200">
            <SelectItem className="text-app-blue-700" value="dog">
              Cachorro
            </SelectItem>
            <SelectItem className="text-app-blue-700" value="cat">
              Gato
            </SelectItem>
          </SelectContent>
        </Select>
      </header>
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
