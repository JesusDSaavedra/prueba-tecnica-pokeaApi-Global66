import { ref } from 'vue'
import { defineStore } from 'pinia'
import { addLocalStorage, getLocalStorage } from '@/utils/localStorage'

interface Favorites {
  [key: string]: string
}

const getFavoritePokemons = (): Favorites => {
  const pokemons = getLocalStorage('favorite-pokemons')
  return pokemons ? JSON.parse(pokemons) : {}
}

export const usePokemonStore = defineStore('pokemons', () => {
  const initialLoader = ref<boolean>(false)
  const currentPokemons = ref<'all' | 'favorites'>('all')
  const favorites = ref<Favorites>(getFavoritePokemons())
  const pokemonsAPI = ref<Record<string, string>>({})

  const changeInitialLoader = (value: boolean) => {
    initialLoader.value = value
  }

  const changeCurrentPokemons = (current_pokemons: 'all' | 'favorites') => {
    if (current_pokemons === currentPokemons.value) return
    currentPokemons.value = current_pokemons
  }

  const addFavorite = (pokemon_name: string) => {
    favorites.value = { ...favorites.value, [pokemon_name]: pokemon_name }
    addLocalStorage('favorite-pokemons', JSON.stringify(favorites.value))
  }

  const removeFavorite = (pokemon_name: string) => {
    const { [pokemon_name]: _, ...restPokemons } = favorites.value
    favorites.value = restPokemons
    addLocalStorage('favorite-pokemons', JSON.stringify(favorites.value))
  }

  const existFavorite = (pokemon_name: string) => {
    return favorites.value[pokemon_name]
  }

  const changePokemonsAPI = (pokemons: Record<string, string>) => {
    pokemonsAPI.value = { ...pokemonsAPI.value, ...pokemons }
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
