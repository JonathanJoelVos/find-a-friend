'use client'

import { Button } from '@/components/atoms/ui/button'
import { Image } from '@/components/atoms/ui/image'
import { useAdoptionRequirements } from '@/service/hooks/useAdoptionRequirements'
import { useFindPetProfile } from '@/service/hooks/useFindPetProfile'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LogoDogSvg from 'public/logo_dog.svg'

interface PetPageProps {
  params: {
    petId: string
  }
}
export default function PetPage({ params: { petId } }: PetPageProps) {
  const { back } = useRouter()
  const { data } = useFindPetProfile({ petId })
  const { data: adoptionRequirements } = useAdoptionRequirements({
    petId,
  })

  return (
    <>
      <main className="flex">
        <div className="min-h-screen bg-red-500 w-1/12 flex flex-col items-center py-10 fixed justify-between">
          <Image src={LogoDogSvg} alt="Logo de cachorro" />
          <Button
            variant="ghost"
            size="icon"
            className="text-app-yellow-500"
            asChild
          >
            <Link href="#" onClick={back}>
              <ArrowLeft className="w-10 h-10" />
            </Link>
          </Button>
        </div>
        <div className="pl-36 pt-10">{JSON.stringify(data)}</div>
        <div className="">{JSON.stringify(adoptionRequirements)}</div>
      </main>
    </>
  )
}
