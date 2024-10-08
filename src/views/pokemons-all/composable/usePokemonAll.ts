import { ref, watchEffect } from 'vue'
import { usePokemons } from '@/composables/usePokemons'
import { usePokemonStore } from '@/stores/pokemon'
import { useInfiniteScroll, useVirtualList } from '@vueuse/core'

export const usePokemonsAll = () => {
  const page = ref<number>(0)

  const { pokemons } = usePokemons(page)

  const store = usePokemonStore()
  const initialLoader = ref<boolean>(store.initialLoader)

  watchEffect(() => {
    store.changePokemonsAPI(pokemons.value ?? {})
  })

  const pokemonsView = ref<string[]>([])

  watchEffect(() => {
    if (Object.keys(store.pokemonsAPI).length !== 0) {
      store.changeInitialLoder(false)
      initialLoader.value = false
    }
    pokemonsView.value = Object.keys(store.pokemonsAPI)
  })

  const { list, containerProps, wrapperProps } = useVirtualList(pokemonsView, {
    itemHeight: 54
  })

  const loadMorePosts = () => {
    if (pokemonsView.value.length === 0 && page.value === 0) return
    if (page.value > 64) return
    page.value = page.value + 1
  }

  useInfiniteScroll(containerProps.ref, loadMorePosts, { distance: 80 })

  return {
    list,
    containerProps,
    wrapperProps,
    initialLoader
  }
}
