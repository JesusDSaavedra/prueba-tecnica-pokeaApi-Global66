import { type Ref } from 'vue'
import { getPokemons } from '../services/get-pokemons'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'

export const usePokemons = (page: Ref<number>) => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error,
    isFetching
  } = useQuery({
    queryKey: ['pokemons', page],
    queryFn: () => getPokemons(page.value),
    placeholderData: keepPreviousData,
    retry: 3
  })

  return {
    //props
    pokemons,
    isLoading,
    isError,
    error,
    isFetching
  }
}
