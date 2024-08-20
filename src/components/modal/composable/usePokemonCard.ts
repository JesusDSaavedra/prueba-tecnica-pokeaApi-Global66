import { usePokemon } from '@/composables/usePokemon'
import type { Pokemon } from '@/interfaces'
import { useClipboard } from '@vueuse/core'
import { ref, computed, type ComputedRef } from 'vue'

interface Props {
  pokemon_name: string
}

const formatPokemonClipboard = (pokemon: Pokemon | null): string => {
  if (!pokemon) return ''

  const notIncludedKeys = ['id', 'frontSprite']
  const formattedData = Object.entries(pokemon)
    .filter(([key]) => !notIncludedKeys.includes(key))
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')

  return formattedData
}

export const usePokemonCard = (props: Props) => {
  const { errorMessage, isError, isLoading, pokemon, isFetching } = usePokemon(props.pokemon_name)

  const pokemonInfo: ComputedRef<string> = computed(() => {
    return formatPokemonClipboard(pokemon.value ?? null)
  })

  const { text, copy, copied, isSupported } = useClipboard({ source: pokemonInfo })

  return {
    pokemon,
    errorMessage,
    isError,
    isLoading,
    isFetching,

    isSupported,
    text,
    copied,
    copy
  }
}
