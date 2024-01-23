'use client'

import { State } from '@/service/types/pet-service'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { formatState } from '@/utils/formatState'
import { SelectProps } from '@radix-ui/react-select'

interface SelectStatesProps extends SelectProps {
  states?: State[]
}
export function SelectStates({ states, ...rest }: SelectStatesProps) {
  return (
    <Select {...rest}>
      <SelectTrigger className="justify-center">
        <SelectValue placeholder="RS" />
      </SelectTrigger>
      <SelectContent>
        {states ? (
          <>
            {states.map((state) => (
              <SelectItem key={state.id} value={state.id}>
                {state.name}
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
