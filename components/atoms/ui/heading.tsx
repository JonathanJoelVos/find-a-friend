import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type HeadingProps = ComponentProps<'h1'>

export function Heading({ className, ...rest }: HeadingProps) {
  return (
    <h1
      className={cn(
        'text-zinc-100 font-extrabold text-3xl md:text-5xl  lg:text-6xl xl:text-7xl',
        className,
      )}
      {...rest}
    />
  )
}
