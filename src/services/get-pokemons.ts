import pokemonApi from '../api/pokemonApi'
import type { PokemonsListResponse } from '../interfaces'

const POKEMONS_PER_PAGE = 20

export const getPokemons = async (page: number): Promise<string[]> => {
  const offset = page * POKEMONS_PER_PAGE
  const { data } = await pokemonApi.get<PokemonsListResponse>(
    `/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`
  )

  return data.results.map((pokemon) => pokemon.name)
}
