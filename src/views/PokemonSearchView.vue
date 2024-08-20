<script setup lang="ts">
import PokemonItem from '@/components/PokemonItem.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { usePokemon } from '../composables/usePokemon'
import router from '@/router'
import IconPokeball from '@/assets/icons/IconPokeball.vue'

const route = useRoute()

const searchValue = computed(() => route.query.name as string)

const { isError, pokemon, isLoading } = usePokemon(searchValue)

const goBack = () => {
  router.push({ name: 'pokemons-all' })
}
</script>

<template>
  <div class="container-pokeball" v-if="isLoading">
    <div class="pokeball">
      <IconPokeball />
    </div>
  </div>
  <div class="container-fail" v-if="isError">
    <p class="text-title">Uh-oh!</p>
    <span class="text-default">You look lost on your journey!</span>
    <button @click="goBack" class="btn-primary btn-back">Go back home</button>
  </div>
  <div class="list" v-if="pokemon">
    <PokemonItem :pokemon="pokemon?.name ?? ''" />
  </div>
</template>

<style scoped>
.container-fail {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  .text-title {
    font-size: 36px;
  }
  .text-default {
    font-size: 20px;
  }
  .btn-back {
    margin-top: 20px;
  }
}
.list {
  padding: 0 30px 0;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.container-pokeball {
  position: relative;
  width: 100%;
  height: calc(100vh - 193.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  .pokeball {
    animation: rotation 1.5s infinite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
