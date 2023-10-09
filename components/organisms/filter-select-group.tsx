import { Filter } from '@/@types/app/filter-group'
import { ScrollArea } from '../atoms/ui/scroll-area'
import { SelectOption } from '../atoms/form/select/select-option'

interface FilterSelectionGroupProps {
  filters: Filter[]
}

export function FilterSelectionGroup({ filters }: FilterSelectionGroupProps) {
  return (
    <ScrollArea className="h-[300px] lg:h-full">
      <div className="p-0.5 space-y-4 mt-4">
        {filters.map((filter) => (
          <SelectOption
            key={filter.label}
            onChange={filter.onChange}
            label={filter.label}
            placeholder={filter.placeholder}
            options={filter.options}
            defaultValue={filter.defaultValue}
          />
        ))}
      </div>
    </ScrollArea>
  )
}
