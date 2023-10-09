import { siteConfig } from '@/config/site'
import { Image } from '../atoms/ui/image'

export function HeaderHome() {
  return (
    <header className="w-full flex justify-center md:justify-start max-w-7xl">
      <Image src={siteConfig.logo} width={150} height={200} alt="logo" />
    </header>
  )
}
