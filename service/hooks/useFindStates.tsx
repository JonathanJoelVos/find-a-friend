'use client'

import { PetService } from '@/service/pet-service'
import { useQuery } from '@tanstack/react-query'

export function useFindStates() {
  const queryCitys = useQuery({
    queryKey: ['states'],
    queryFn: async () => await PetService.getStates(),
    refetchOnWindowFocus: false,
  })

  return queryCitys
}
