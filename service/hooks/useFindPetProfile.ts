'use client'

import { useQuery } from '@tanstack/react-query'
import { PetService } from '../pet-service'

interface useFindPetProfileProps {
  petId: string
}
export function useFindPetProfile({ petId }: useFindPetProfileProps) {
  const queryPet = useQuery({
    queryKey: ['pet', petId],
    queryFn: async () => await PetService.getProfile(petId),
  })

  return queryPet
}
