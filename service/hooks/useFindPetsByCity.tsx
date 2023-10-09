import { PetService } from '@/service/pet-service'
import { useQuery } from '@tanstack/react-query'

interface FindPetsByCityProps {
  cityId: string
  searchParams?: string
}

export function useFindPetsByCity({
  cityId,
  searchParams,
}: FindPetsByCityProps) {
  const queryPets = useQuery({
    queryKey: ['pets', cityId, searchParams],
    queryFn: async () => await PetService.getByCity(cityId, searchParams),
  })

  return queryPets
}
