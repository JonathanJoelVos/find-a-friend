import { Pet } from '@/service/types/pet-service'
import { PetCard } from '../molecules/pet-card'

interface PetCardsListProps {
  pets: Pet[]
}
export function PetCardsList({ pets }: PetCardsListProps) {
  return (
    <ul className="text-black flex flex-wrap gap-4 justify-start items-start">
      {pets?.map((pet) => <PetCard pet={pet} key={pet.id} />)}
    </ul>
  )
}
