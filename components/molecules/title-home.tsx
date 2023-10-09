import { ReactNode } from 'react'
import { Heading } from '../atoms/ui/heading'

interface TitleHomeProps {
  children: ReactNode
}

export function TitleHome({ children }: TitleHomeProps) {
  return <Heading className="text-center md:text-start">{children}</Heading>
}
