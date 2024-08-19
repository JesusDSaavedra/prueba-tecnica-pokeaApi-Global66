<script setup lang="ts">
import IconPokeball from '@/assets/icons/IconPokeball.vue'
import PokemonItem from './PokemonItem.vue'

interface Props {
  pokemons: string[]
}

defineProps<Props>()
</script>

<template>
  <div class="container-item-list">
    <PokemonItem v-for="pokemon of pokemons" :key="pokemon" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.container-item-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
}
</style>
