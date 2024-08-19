<script setup lang="ts">
import WelcomeImage from '@/assets/images/WelcomeImage.vue'
import { usePokemonStore } from '@/stores/pokemon'
import { watchEffect } from 'vue'
import router from '@/router'

const store = usePokemonStore()

watchEffect(() => {
  console.log(store.initialLoader)
})

const goPokemons = () => {
  store.changeInitialLoder(true)
  router.push({ name: 'pokemons' })
}
</script>

<template>
  <main class="container">
    <div class="container-info">
      <WelcomeImage class="image" />
      <h2 class="text-title">Welcome to Pokédex</h2>
      <p class="text-default">
        The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
        Pokémon world.
      </p>
      <button class="btn-primary" @click="goPokemons">Get started</button>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 570px;
    .image {
      width: 325px;
      margin-bottom: 20px;
    }
    .text-title {
      font-size: 26px;
      margin: 30px 0;
    }
    .text-default {
      font-size: 18px;
      text-align: center;
      line-height: 27px;
    }
    .btn-primary {
      margin-top: 50px;
    }
  }
}

@media (max-width: 640px) {
  .container {
    .container-info {
      .text-default {
        padding: 0 30px 0;
      }
    }
  }
}
</style>
