'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { useFindPetsByCity } from '@/service/hooks/useFindPetsByCity'
import { PetFilterHeader } from '../organisms/pet-filter-header'
import { PetCardsList } from '../organisms/pet-cards-list'

export function ListPets() {
  const params = useParams()
  const searchParams = useSearchParams().toString()

  const cityId = params.cityId as string

  const { data: pets, isLoading } = useFindPetsByCity({
    cityId,
    searchParams,
  })

  const numberOfPets = pets?.length ?? 0
  const isPetFoundInCity = numberOfPets > 0

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className="min-h-screen w-full text-zinc-100 bg-app-red-100 p-8">
      <PetFilterHeader numberOfPets={numberOfPets} />
      {pets && isPetFoundInCity ? (
        <PetCardsList pets={pets} />
      ) : (
        <div className="text-app-blue-700">Nenhum pet encontrado</div>
      )}
    </section>
  )
}
