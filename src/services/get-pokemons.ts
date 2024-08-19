import pokemonApi from '../api/pokemonApi'
import type { PokemonsListResponse } from '../interfaces'

export const getPokemons = async (page: number): Promise<Record<string, string>> => {
  const quantity = 20

  const { data } = await pokemonApi.get<PokemonsListResponse>(
    `/pokemon?limit=${quantity}&offset=${page * quantity}`
  )

  const list_pokemons = data.results.reduce((acc: Record<string, string>, curr) => {
    acc[curr.name] = curr.name
    return acc
  }, {})

  return list_pokemons
}
