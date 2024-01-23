import { SearchSlash } from 'lucide-react'
import { Button } from '../../ui/button'

interface ButtonSearchProps {
  disabled?: boolean
}

export function ButtonSearch({ disabled }: ButtonSearchProps) {
  return (
    <Button
      type="submit"
      size="icon"
      className="bg-secondary hover:bg-secondary/90 max-w-none h-12 w-full lg:w-14"
      disabled={disabled}
    >
      <SearchSlash className="h-5 w-5" />
    </Button>
  )
}
