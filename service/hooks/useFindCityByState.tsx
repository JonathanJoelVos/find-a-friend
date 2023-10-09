'use client'

import { PetService } from '@/service/pet-service'
import { useQuery } from '@tanstack/react-query'

interface FindLocalProps {
  stateId: string
}

export function useFindCityByState({ stateId }: FindLocalProps) {
  const queryCitys = useQuery({
    queryKey: ['state', stateId],
    queryFn: async () => await PetService.getCitysByStateId(stateId),
    refetchOnWindowFocus: false,
  })

  return queryCitys
}
