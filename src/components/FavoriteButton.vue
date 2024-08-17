<script setup lang="ts">
import { ref } from 'vue'
import IconFavorite from '@/assets/icons/IconFavorite.vue'

const isFavorited = ref<boolean>(true)
const togglefavorite = () => (isFavorited.value = !isFavorited.value)
</script>

<template>
  <button @click="togglefavorite" class="btn-favorite">
    <Transition name="favorite-transition" mode="out-in">
      <IconFavorite color="#ECA539" v-if="isFavorited" />
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
