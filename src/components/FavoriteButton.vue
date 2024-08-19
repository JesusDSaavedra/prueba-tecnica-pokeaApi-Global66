<script setup lang="ts">
import IconFavorite from '@/assets/icons/IconFavorite.vue'
import { usePokemonStore } from '../stores/pokemon'

interface Props {
  pokemon_name: string
}

defineProps<Props>()

const store = usePokemonStore()

const toggleFavorite = (pokemon_name: string) => {
  const isFavorite = store.existFavorite(pokemon_name)

  if (isFavorite) {
    store.removeFavorite(pokemon_name)
    return
  }
  store.addFavorite(pokemon_name)
}
</script>

<template>
  <button @click="toggleFavorite(pokemon_name)" class="btn-favorite">
    <Transition name="favorite-transition" mode="out-in">
      <IconFavorite color="#ECA539" v-if="store.existFavorite(pokemon_name)" />
      <IconFavorite color="#BFBFBF" v-else />
    </Transition>
  </button>
</template>

<style scoped>
.btn-favorite {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
}
</style>
