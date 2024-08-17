<script setup lang="ts">
import FavoriteButton from './FavoriteButton.vue'
</script>

<template>
  <div class="item-list">
    <span class="name text-title">Bulbasaur</span>
    <FavoriteButton />
  </div>
</template>

<style scoped>
.item-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 8px;
  background-color: #ffff;
  max-width: 570px;
  border-radius: 5px;
  width: 100%;
  .name {
    cursor: pointer;
    font-size: 22px;
    padding-left: 10px;
    font-weight: 400;
  }
}
</style>
