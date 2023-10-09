import { Filter } from '@/@types/app/filter-group'
import { Button } from '@/components/atoms/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/atoms/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { ComponentProps } from 'react'
import { SearchAndFilterSidebarContent } from './content'

interface SearchAndFilterSidebarDrawerProps extends ComponentProps<'div'> {
  filters: Filter[]
}

export function SearchAndFilterSidebarDrawer({
  filters,
  className,
  ...rest
}: SearchAndFilterSidebarDrawerProps) {
  return (
    <div className={cn('lg:hidden block', className)} {...rest}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="max-w-[50px] hover:bg-white">
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0 w-full">
          <SearchAndFilterSidebarContent filters={filters} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
