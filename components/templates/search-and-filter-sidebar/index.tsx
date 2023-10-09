'use client'

import { useFilter } from '@/app/pets/hooks/useFilter'
import { SearchAndFilterSidebarContent } from './content'
import { SearchAndFilterSidebarDrawer } from './drawer'

export function SearchAndFilterSidebar() {
  const { filters } = useFilter()

  return (
    <>
      <SearchAndFilterSidebarDrawer filters={filters} />
      <SearchAndFilterSidebarContent
        className="lg:block hidden md:w-2/4 lg:w-1/3"
        filters={filters}
      />
    </>
  )
}
