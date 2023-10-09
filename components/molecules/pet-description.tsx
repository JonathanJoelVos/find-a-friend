import { Image } from '../atoms/ui/image'
import { Text } from '../atoms/ui/text'

interface PetDescriptionProps {
  imageSrc: string
  description?: string
}

export function PetDescription({ imageSrc, description }: PetDescriptionProps) {
  return (
    <>
      <Image src={imageSrc} width={592} alt="Imagem ilustrativa de cachorros" />
      <Text className="text-center lg:text-start text-sm lg:text-lg lg:mt-10">
        {description}
      </Text>
    </>
  )
}
