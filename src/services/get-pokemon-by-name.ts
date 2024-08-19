import pokemonApi from '../api/pokemonApi'
import type { PokemonResponse, Pokemon } from '../interfaces'

export const getPokemonById = async (name: string): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${name}`)
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    types: data.types.map((type) => type.type.name),
    frontSprite: data.sprites.front_default
  }
}
