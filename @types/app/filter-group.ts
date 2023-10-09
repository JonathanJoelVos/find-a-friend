export type AgeOptions = {
  value: 'cub' | 'adolescent' | 'elderly'
  label: string
}
export type EnergyOptions = {
  value: '0' | '1' | '2' | '3' | '4' | '5'
  label: string
}
export type SizeOptions = {
  value: 'small' | 'medium' | 'big'
  label: string
}

export type LevelOfDependenceOptions = {
  value: 'low' | 'medium' | 'high'
  label: string
}

export type Option = {
  value: string
  label: string
}

export type Filter = {
  label: string
  options: Option[]
  placeholder: string
  defaultValue: string | undefined
  onChange: (value: string) => void
}
