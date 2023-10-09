import { ListPets } from '@/components/molecules/list-pets'

import { SearchAndFilterSidebar } from '@/components/templates/search-and-filter-sidebar'

export default function PetsByCityPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      <SearchAndFilterSidebar />
      <ListPets />
    </div>
  )
}
