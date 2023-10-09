import { Filter } from '@/@types/app/filter-group'
import { Image } from '@/components/atoms/ui/image'
import { Text } from '@/components/atoms/ui/text'
import { FilterSelectionGroup } from '@/components/organisms/filter-select-group'
import { cn } from '@/lib/utils'
import LogoDogSVG from 'public/logo_dog.svg'
import { ComponentProps } from 'react'
import { SearchByCityForm } from '../../molecules/search-by-city-form'

interface SearchAndFilterSidebarContentProps extends ComponentProps<'div'> {
  filters: Filter[]
}

export function SearchAndFilterSidebarContent({
  filters,
  className,
  ...rest
}: SearchAndFilterSidebarContentProps) {
  return (
    <div
      className={cn('bg-app-red-500 min-h-screen w-full', className)}
      {...rest}
    >
      <div className="bg-app-red-700 p-10">
        <Image
          src={LogoDogSVG}
          alt="Logo de cachorros"
          width={47}
          className="pt-14"
        />
        <SearchByCityForm className="mt-10" />
      </div>
      <div className="py-9 px-14 flex flex-col">
        <Text className="font-bold text-xl">Filtros</Text>
        <FilterSelectionGroup filters={filters} />
      </div>
    </div>
  )
}
