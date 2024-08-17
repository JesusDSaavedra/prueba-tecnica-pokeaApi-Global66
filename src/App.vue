<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
.favorite-transition-enter-active,
.favorite-transition-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.favorite-transition-enter-from,
.favorite-transition-leave-to {
  opacity: 0;
}
</style>
