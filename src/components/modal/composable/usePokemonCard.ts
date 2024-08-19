import { usePokemon } from '@/composables/usePokemon'
import { useClipboard } from '@vueuse/core'
import { ref, computed } from 'vue'

interface Props {
  pokemon_name: string
}

export const usePokemonCard = (props: Props) => {
  const { errorMessage, isError, isLoading, pokemon, isFetching } = usePokemon(props.pokemon_name)

  function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const pokemonInfo = computed(() => {
    if (!pokemon) return ''
    const noVan = ['id', 'frontSprite']
    const prueba = Object.entries(pokemon.value!).reduce((acc, [key, value]) => {
      if (noVan.includes(key)) return acc
      acc += `${key}: ${value} , `
      return acc
    }, '')
    const ooo = prueba.trim().trimEnd().lastIndexOf(',')
    return prueba.substring(0, ooo)
  })

  const { text, copy, copied, isSupported } = useClipboard({ source: pokemonInfo })

  return {
    copied,
    copy,
    pokemon,
    isLoading,
    capitalizeFirstLetter,
    isFetching
  }
}
