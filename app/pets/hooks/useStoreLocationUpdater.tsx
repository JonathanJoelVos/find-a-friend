import { useFindPetStore } from '@/stores/find-store'

export function useStoreLocationUpdater() {
  const { updateCityId, updateStateId } = useFindPetStore()

  function handleChangeCityId(value: string, onChange: any) {
    updateCityId(value)
    onChange(value)
  }

  function handleChangeStateId(value: string, onChange: any) {
    updateStateId(value)
    onChange(value)
  }

  return {
    handleChangeCityId,
    handleChangeStateId,
  }
}
