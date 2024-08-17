<script setup lang="ts">
import PokemonCardInfo from './PokemonCardInfo.vue'
import PokemonItem from './PokemonItem.vue'
import { ref } from 'vue'

const showModal = ref(false)

const onClickShowModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div class="container-item-list">
    <PokemonItem @click="onClickShowModal" />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
    <PokemonItem />
  </div>
  <Teleport to="body">
    <Transition name="favorite-transition" mode="out-in">
      <PokemonCardInfo v-if="showModal" @close="onClickShowModal" />
    </Transition>
  </Teleport>
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
