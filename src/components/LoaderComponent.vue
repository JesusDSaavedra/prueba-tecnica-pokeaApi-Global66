<script setup lang="ts">
import IconPokeball from '@/assets/icons/IconPokeball.vue'
</script>

<template>
  <div class="container-pokeball">
    <div class="pokeball">
      <IconPokeball />
    </div>
  </div>
</template>

<style scoped>
.container-pokeball {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  position: relative;
}

.pokeball {
  animation: rotation 2s infinite;
}
</style>
