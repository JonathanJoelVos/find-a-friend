import { SearchSlash } from 'lucide-react'
import { Button } from '../../ui/button'

interface ButtonSearchProps {
  disabled?: boolean
}

export function ButtonSearch({ disabled }: ButtonSearchProps) {
  return (
    <Button
      type="submit"
      className="bg-app-yellow-500 hover:bg-app-yellow-500/90 max-w-none"
      disabled={disabled}
    >
      <SearchSlash className="h-4 w-4" />
    </Button>
  )
}
