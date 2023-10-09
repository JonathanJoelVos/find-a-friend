import { cn } from '@/lib/utils'
import { Slot, SlotProps } from '@radix-ui/react-slot'

interface TextProps extends SlotProps {
  asChild?: boolean
}
export function Text({ asChild = false, className, ...rest }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={cn('text-zinc-100 font-light ', className)}
      {...rest}
    />
  )
}
