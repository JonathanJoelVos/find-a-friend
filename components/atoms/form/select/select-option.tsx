'use client'

import { Filter } from '@/@types/app/filter-group'
import { SelectProps } from '@radix-ui/react-select'
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectValue,
} from '../../ui/select'
import { Text } from '../../ui/text'

type SelectOptionProps = Filter & SelectProps

export function SelectOption({
  placeholder,
  label,
  onChange,
  options,
  ...rest
}: SelectOptionProps) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <Text className="text-xs">{label}</Text>
      <Select onValueChange={onChange} {...rest}>
        <SelectTrigger className="justify-between border-none bg-app-red-300 p-5 text-sm font-bold">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
