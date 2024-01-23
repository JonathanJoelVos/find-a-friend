import { useQuery } from '@tanstack/react-query'
import { PetService } from '../pet-service'

interface useAdoptionRequirementsProps {
  petId: string
}
export function useAdoptionRequirements({
  petId,
}: useAdoptionRequirementsProps) {
  const queryAdoptionRequirements = useQuery({
    queryKey: ['requirements', petId],
    queryFn: async () => await PetService.getAdoptionRequirements(petId),
  })

  return queryAdoptionRequirements
}
