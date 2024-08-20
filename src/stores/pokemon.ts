import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addLocalStorage, getLocalStorage } from '@/utils/localStorage'

const LOCAL_STORAGE_KEY = 'favorite-pokemons'

const getFavoritePokemons = (): string[] => {
  const pokemons = getLocalStorage('favorite-pokemons')
  return pokemons ? JSON.parse(pokemons) : []
}

export const usePokemonStore = defineStore('pokemons', () => {
  const initialLoader = ref<boolean>(false)
  const currentPokemons = ref<'all' | 'favorites'>('all')
  const favorites = ref<string[]>(getFavoritePokemons())
  const pokemonsAPI = ref<string[]>([])

  const changeInitialLoader = (value: boolean) => {
    initialLoader.value = value
  }

  const changeCurrentPokemons = (current_pokemons: 'all' | 'favorites') => {
    if (current_pokemons === currentPokemons.value) return
    currentPokemons.value = current_pokemons
  }

  const addFavorite = (pokemon_name: string) => {
    favorites.value = [...favorites.value, pokemon_name]
    addLocalStorage(LOCAL_STORAGE_KEY, JSON.stringify(favorites.value))
  }

  const removeFavorite = (pokemon_name: string) => {
    favorites.value = favorites.value.filter((name) => name !== pokemon_name)
    addLocalStorage(LOCAL_STORAGE_KEY, JSON.stringify(favorites.value))
  }

  const existFavorite = (pokemon_name: string) => {
    return favorites.value.includes(pokemon_name)
  }

  const changePokemonsAPI = (pokemons: string[]) => {
    pokemonsAPI.value = [...pokemonsAPI.value, ...pokemons]
  }

  return {
    initialLoader,
    changeInitialLoader,
    addFavorite,
    removeFavorite,
    existFavorite,
    changeCurrentPokemons,
    currentPokemons,
    favorites,
    changePokemonsAPI,
    pokemonsAPI
  }
})
