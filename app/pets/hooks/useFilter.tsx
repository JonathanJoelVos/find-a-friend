import { Filter } from '@/@types/app/filter-group'
import { useFindPetStore } from '@/stores/find-store'

export function useFilter() {
  const {
    age,
    energy,
    levelOfDependence,
    size,
    updateAge,
    updateEnergy,
    updateLevelOfDependence,
    updateSize,
  } = useFindPetStore()

  const filters: Filter[] = [
    {
      label: 'Idade',
      options: [
        {
          value: 'adolescent',
          label: 'Adolescente',
        },
        {
          value: 'cub',
          label: 'Filhote',
        },
        {
          value: 'elderly',
          label: 'Idoso',
        },
      ],
      placeholder: 'Idade',
      defaultValue: age,
      onChange: updateAge,
    },
    {
      label: 'Nível de Energia',
      options: [
        {
          value: '0',
          label: '0',
        },
        {
          value: '1',
          label: '1',
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '3',
          label: '3',
        },
        {
          value: '4',
          label: '4',
        },
        {
          value: '5',
          label: '5',
        },
      ],
      placeholder: 'Energia',
      defaultValue: energy,
      onChange: updateEnergy,
    },
    {
      label: 'Porte do animal',
      options: [
        {
          value: 'small',
          label: 'Pequeno',
        },
        {
          value: 'medium',
          label: 'Médio',
        },
        {
          value: 'big',
          label: 'Grande',
        },
      ],
      placeholder: 'Porte',
      defaultValue: size,
      onChange: updateSize,
    },
    {
      label: 'Nível de independência',
      options: [
        {
          value: 'low',
          label: 'Baixa',
        },
        {
          value: 'medium',
          label: 'Média',
        },
        {
          value: 'high',
          label: 'Alta',
        },
      ],
      placeholder: 'Independência',
      defaultValue: levelOfDependence,
      onChange: updateLevelOfDependence,
    },
  ]

  return {
    filters,
  }
}
