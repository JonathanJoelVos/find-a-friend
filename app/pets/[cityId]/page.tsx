import { ListPets } from '@/components/molecules/list-pets'

import { SearchAndFilterSidebar } from '@/components/templates/search-and-filter-sidebar'

export default function PetsByCityPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen relative">
      <SearchAndFilterSidebar />
      <div className="w-full text-zinc-100 bg-app-red-100 p-8">
        <ListPets />
      </div>
    </div>
  )
}
