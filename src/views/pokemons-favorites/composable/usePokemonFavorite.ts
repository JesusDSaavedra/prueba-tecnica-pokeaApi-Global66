import { computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

export const usePokemonsFavorite = () => {
  const store = usePokemonStore()

  const pokemonsView = computed<string[]>(() => store.favorites)

  return {
    pokemonsView
  }
}
