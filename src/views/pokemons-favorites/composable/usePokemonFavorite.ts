import { ref, watchEffect } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

export const usePokemonsFavorite = () => {
  const store = usePokemonStore()
  const pokemonsView = ref<string[]>(Object.keys(store.favorites))

  watchEffect(() => {
    pokemonsView.value = Object.keys(store.favorites)
  })

  return {
    pokemonsView
  }
}
