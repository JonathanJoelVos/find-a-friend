import { SelectProps } from '@radix-ui/react-select'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../atoms/ui/select'

interface SelectPetTypeProps extends SelectProps {
  onSelectType?: (value: string) => void
  petsTypes: {
    label: string
    value: string
  }[]
}

export function SelectPetType({
  onSelectType,
  petsTypes,
  ...rest
}: SelectPetTypeProps) {
  return (
    <Select onValueChange={onSelectType} {...rest}>
      <SelectTrigger className="justify-between w-full text-app-blue-700 border-none bg-app-red-200 text-sm font-bold max-w-[250px] px-5">
        <SelectValue placeholder="Escolha" />
      </SelectTrigger>
      <SelectContent className="bg-app-red-200">
        {petsTypes.map((type) => (
          <SelectItem
            key={type.value}
            className="text-app-blue-700"
            value={type.value}
          >
            {type.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
