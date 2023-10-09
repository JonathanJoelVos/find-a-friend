import { useFindCityByState } from '@/service/hooks/useFindCityByState'
import { useFindStates } from '@/service/hooks/useFindStates'
import { useFindPetStore } from '@/stores/find-store'

export function useStateAndCityData() {
  const { stateId } = useFindPetStore()

  const { data: states, isLoading: isLoadingStates } = useFindStates()
  const { data: citys, isLoading: isLoadingCitys } = useFindCityByState({
    stateId,
  })

  return {
    isLoadingStates,
    states,
    citys,
    isLoadingCitys,
  }
}
