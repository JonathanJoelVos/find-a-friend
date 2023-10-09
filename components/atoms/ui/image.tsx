import { ComponentProps } from 'react'
import ImageNext from 'next/image'

type ImageProps = ComponentProps<typeof ImageNext>

export function Image({ src, width, alt, ...props }: ImageProps) {
  return <ImageNext src={src} width={width} alt={alt} {...props} />
}
