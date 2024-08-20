<script setup lang="ts">
import PokemonItemList from '@/components/PokemonItemList.vue'
import { usePokemonsAll } from './composable/usePokemonAll'
import LoaderComponent from '@/components/LoaderComponent.vue'

const { list, containerProps, wrapperProps, initialLoader } = usePokemonsAll()
</script>

<template>
  <div v-if="initialLoader" class="container-loader">
    <LoaderComponent />
  </div>
  <div class="list" v-bind="containerProps">
    <PokemonItemList v-bind="wrapperProps" :pokemons="list.map((value) => value.data)" />
  </div>
</template>

<style scoped>
.list {
  height: calc(100vh - 200px);
  width: 100%;
}
.container-loader {
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
}
</style>
