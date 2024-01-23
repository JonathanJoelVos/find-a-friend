import { useFindPetStore } from '@/stores/find-store'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  cityId: z.string().min(1),
  stateId: z.string(),
})

export type SearchPetFormProps = z.infer<typeof schema>

export function useSearchPetFormValidation() {
  const router = useRouter()
  const { cityId, stateId, age, energy, levelOfDependence, size, type } =
    useFindPetStore()

  const { control, handleSubmit } = useForm<SearchPetFormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      cityId,
      stateId,
    },
  })

  function onSubmit({ cityId }: SearchPetFormProps) {
    let url = `/pets/${cityId}`
    const queryParams = []

    if (age) queryParams.push(`age=${age}`)
    if (size) queryParams.push(`size=${size}`)
    if (energy) queryParams.push(`energy=${energy}`)
    if (levelOfDependence)
      queryParams.push(`level_of_dependence=${levelOfDependence}`)
    if (type) queryParams.push(`type=${type}`)

    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`
    }

    router.push(url)
  }

  return {
    control,
    handleSearchPetSubmit: handleSubmit(onSubmit),
    isEnableSubmit: cityId && stateId,
  }
}
