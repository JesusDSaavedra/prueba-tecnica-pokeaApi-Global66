<script setup lang="ts">
import FavoriteButton from './FavoriteButton.vue'
import { ref } from 'vue'
import PokemonCardInfo from './modal/PokemonCardInfo.vue'

interface Props {
  pokemon: string
}

defineProps<Props>()
const showModal = ref<boolean>(false)

const onClickShowModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <div class="item-list">
    <span @click="onClickShowModal" class="name text-title">{{ pokemon }}</span>
    <FavoriteButton :pokemon_name="pokemon" />
  </div>
  <Teleport to="body">
    <Transition name="favorite-transition" mode="out-in">
      <PokemonCardInfo :pokemon_name="pokemon" v-if="showModal" @close="onClickShowModal" />
    </Transition>
  </Teleport>
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
    text-transform: capitalize;
  }
}
</style>
