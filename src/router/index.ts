import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      redirect: 'pokemons/all',
      component: () => import('@/layout/PokemonLayout.vue'),
      children: [
        {
          path: '/pokemons/all',
          name: 'pokemons-all',
          component: () => import('@/views/pokemons-all/PokemonsView.vue')
        },
        {
          path: '/pokemons/favorites',
          name: 'pokemons-favorites',
          component: () => import('@/views/pokemons-favorites/PokemonsFavoritesView.vue')
        },
        {
          path: '/pokemons/search',
          name: 'pokemon-search',
          component: () => import('@/views/PokemonSearchView.vue'),
          props: (route) => ({ query: route.query.name })
        }
      ]
    }
  ]
})

export default router
