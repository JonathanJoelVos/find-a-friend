import { Text } from '../atoms/ui/text'
import { SearchByCityForm } from './search-by-city-form'

export function FindForm() {
  return (
    <div className="flex flex-col items-center gap-2 lg:mt-10">
      <Text className="text-xs text-zinc-100">Busque um amigo:</Text>
      <SearchByCityForm />
    </div>
  )
}
