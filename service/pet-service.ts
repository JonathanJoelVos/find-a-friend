import { City, Pet, State } from '@/@types/service/pet-service'
import api from './api'

export class PetService {
  static async getCitysByStateId(stateId: string): Promise<City[]> {
    const response = await api.get(`/citys/${stateId}`)

    return response.data.citys
  }

  static async getStates(): Promise<State[]> {
    const response = await api.get(`/states`)

    return response.data.states
  }

  static async getByCity(
    cityId: string,
    searchParams?: string,
  ): Promise<Pet[]> {
    let url = `/pets/${cityId}`

    if (searchParams) {
      url += `?${searchParams}`
    }

    const response = await api.get(url)

    return response.data.pets
  }
}
