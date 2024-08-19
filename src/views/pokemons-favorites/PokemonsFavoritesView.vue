<script setup lang="ts">
import PokemonItemList from '@/components/PokemonItemList.vue'
import { usePokemonsFavorite } from './composable/usePokemonFavorite'

const { pokemonsView } = usePokemonsFavorite()
</script>

<template>
  <div class="list">
    <PokemonItemList :pokemons="pokemonsView" />
  </div>
</template>

<style scoped>
.list {
  padding: 0 30px 0;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
