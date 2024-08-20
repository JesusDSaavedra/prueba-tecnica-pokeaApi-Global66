<script setup lang="ts">
import IconFavorite from '@/assets/icons/IconFavorite.vue'
import { usePokemonStore } from '../stores/pokemon'
import { computed } from 'vue'

interface Props {
  pokemon_name: string
}

const props = defineProps<Props>()
const store = usePokemonStore()

const isFavorite = computed(() => store.existFavorite(props.pokemon_name))

const toggleFavorite = () => {
  if (isFavorite.value) {
    store.removeFavorite(props.pokemon_name)
    return
  }
  store.addFavorite(props.pokemon_name)
}
</script>

<template>
  <button @click="toggleFavorite()" class="btn-favorite">
    <Transition name="favorite-transition" mode="out-in">
      <IconFavorite :color="isFavorite ? '#ECA539' : '#BFBFBF'" />
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
