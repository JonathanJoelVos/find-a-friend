'use client'

import { City } from '@/@types/service/pet-service'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { SelectProps } from '@radix-ui/react-select'

interface SelectCitysProps extends SelectProps {
  citys?: City[]
  isLoading?: boolean
}

export function SelectCitys({
  citys,
  isLoading = false,
  ...rest
}: SelectCitysProps) {
  const isDisabled = citys?.length === 0

  return (
    <Select disabled={isDisabled} {...rest}>
      <SelectTrigger className="justify-center px-12 w-full border-none bg-app-red-700 text-xs font-extrabold outline-none focus:ring-transparent">
        <SelectValue placeholder="Cidade" />
      </SelectTrigger>
      <SelectContent>
        {isLoading ? (
          <SelectItem value="Carregando...">Carregando...</SelectItem>
        ) : citys ? (
          <>
            {citys.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </>
        ) : (
          <SelectItem value="Nenhum estado encontrado">
            Nenhum estado encontrado
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}
