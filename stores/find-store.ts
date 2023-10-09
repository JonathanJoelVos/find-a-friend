import { create } from 'zustand'

type State = {
  cityId: string
  stateId: string
  age?: string
  energy?: string
  size?: string
  levelOfDependence?: string
}

type Actions = {
  updateCityId: (cityId: State['cityId']) => void
  updateStateId: (stateId: State['stateId']) => void
  updateAge: (age: State['age']) => void
  updateEnergy: (energy: State['energy']) => void
  updateSize: (size: State['size']) => void
  updateLevelOfDependence: (
    levelOfDependence: State['levelOfDependence'],
  ) => void
}

export const useFindPetStore = create<State & Actions>((set) => ({
  cityId: '',
  stateId: '',
  age: '',
  energy: '',
  size: '',
  levelOfDependence: '',
  updateCityId: (cityId) => set({ cityId }),
  updateStateId: (stateId) => set({ stateId }),
  updateAge: (age) => set({ age }),
  updateEnergy: (energy) => set({ energy }),
  updateSize: (size) => set({ size }),
  updateLevelOfDependence: (levelOfDependence) => set({ levelOfDependence }),
}))
