'use client'

import { SelectCitys } from '../atoms/form/select/select-citys'
import { SelectStates } from '../atoms/form/select/select-states'
import { Controller } from 'react-hook-form'
import { ButtonSearch } from '../atoms/form/button/button-search'
import { Loading } from '../atoms/ui/loading'

import { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import { useSearchPetFormValidation } from '@/app/pets/hooks/useSearchPetFormValidation'
import { useStateAndCityData } from '@/app/pets/hooks/useStateAndCityData'
import { useStoreLocationUpdater } from '@/app/pets/hooks/useStoreLocationUpdater'

type SearchByCityFormProps = ComponentProps<'form'>

export function SearchByCityForm({
  className,
  ...rest
}: SearchByCityFormProps) {
  const { handleSearchPetSubmit, control, isEnableSubmit } =
    useSearchPetFormValidation()

  const { citys, isLoadingCitys, states, isLoadingStates } =
    useStateAndCityData()

  const { handleChangeCityId, handleChangeStateId } = useStoreLocationUpdater()

  return (
    <>
      {isLoadingStates ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSearchPetSubmit}
          className={cn(
            'flex gap-1.5 w-full max-w-sm flex-col lg:flex-row',
            className,
          )}
          {...rest}
        >
          <Controller
            name="stateId"
            control={control}
            render={({ field }) => (
              <SelectStates
                states={states}
                onValueChange={(stateId) =>
                  handleChangeStateId(stateId, field.onChange)
                }
                defaultValue={field.value}
                {...field}
              />
            )}
          />
          <Controller
            name="cityId"
            control={control}
            render={({ field }) => (
              <SelectCitys
                citys={citys}
                isLoading={isLoadingCitys}
                onValueChange={(cityId) =>
                  handleChangeCityId(cityId, field.onChange)
                }
                defaultValue={field.value}
                {...field}
              />
            )}
          />
          <ButtonSearch disabled={!isEnableSubmit} />
        </form>
      )}
    </>
  )
}
