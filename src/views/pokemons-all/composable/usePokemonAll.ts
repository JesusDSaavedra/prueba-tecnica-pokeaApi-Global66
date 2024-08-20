import { ref, watchEffect } from 'vue'
import { usePokemons } from '@/composables/usePokemons'
import { usePokemonStore } from '@/stores/pokemon'
import { useInfiniteScroll, useVirtualList } from '@vueuse/core'

const LIMIT_PAGES = 64

export const usePokemonsAll = () => {
  const page = ref<number>(0)

  const { pokemons } = usePokemons(page)

  const store = usePokemonStore()
  const initialLoader = ref<boolean>(store.initialLoader)

  watchEffect(() => {
    store.changePokemonsAPI(pokemons.value ?? [])
  })

  const pokemonsView = ref<string[]>([])

  watchEffect(() => {
    if (store.pokemonsAPI.length !== 0) {
      store.changeInitialLoader(false)
      initialLoader.value = false
    }
    pokemonsView.value = store.pokemonsAPI
  })

  const { list, containerProps, wrapperProps } = useVirtualList(pokemonsView, {
    itemHeight: 54
  })

  const loadMorePosts = () => {
    if (pokemonsView.value.length === 0 && page.value === 0) return
    if (page.value > LIMIT_PAGES) return
    page.value = page.value + 1
  }

  useInfiniteScroll(containerProps.ref, loadMorePosts, { distance: 80 })

  return {
    list,
    containerProps,
    wrapperProps,
    initialLoader,
    pokemonsView
  }
}
