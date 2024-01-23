import { useFindPetStore } from '@/stores/find-store'
import { Text } from '../atoms/ui/text'
import { SelectPetType } from '../molecules/select-pet-type'

interface PetFilterHeaderProps {
  numberOfPets: number
}
export function PetFilterHeader({ numberOfPets }: PetFilterHeaderProps) {
  const { updateType, type } = useFindPetStore()

  function handleSelectType(value: string) {
    updateType(value)
  }

  return (
    <header className="p-2 flex items-center justify-between py-12">
      <Text className="text-app-blue-700 text-xl">
        {' '}
        Encontre{' '}
        <strong className="font-extrabold">{numberOfPets} amigos</strong> na sua
        cidade
      </Text>
      <SelectPetType
        petsTypes={[
          { label: 'Cachorro', value: 'dog' },
          { label: 'Gato', value: 'cat' },
        ]}
        onSelectType={handleSelectType}
        value={type}
        defaultValue={type}
      />
    </header>
  )
}
