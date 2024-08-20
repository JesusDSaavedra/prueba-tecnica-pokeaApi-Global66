import pokemonApi from '../api/pokemonApi'
import type { PokemonsListResponse } from '../interfaces'

const POKEMONS_PER_PAGE = 20

export const getPokemons = async (page: number): Promise<Record<string, string>> => {
  const offset = page * POKEMONS_PER_PAGE
  const { data } = await pokemonApi.get<PokemonsListResponse>(
    `/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`
  )

  const list_pokemons = data.results.reduce((acc: Record<string, string>, curr) => {
    acc[curr.name] = curr.name
    return acc
  }, {})

  return list_pokemons
}
