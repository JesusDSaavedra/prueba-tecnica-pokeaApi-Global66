<script setup lang="ts">
import FavoriteButton from '../FavoriteButton.vue'
import IconClose from '@/assets/icons/IconClose.vue'
import IconPokeball from '@/assets/icons/IconPokeball.vue'
import { usePokemonCard } from './composable/usePokemonCard'
import { capitalizeFirstLetter } from '@/utils/utils-functions'

interface Props {
  pokemon_name: string
}

const props = defineProps<Props>()

const { copied, copy, pokemon, isFetching } = usePokemonCard(props)

const emit = defineEmits<{ (e: 'close'): void }>()

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div class="modal">
    <article class="pokemon-card">
      <header class="container-images">
        <button @click="closeModal" class="btn-close">
          <IconClose />
        </button>
        <div class="pokeball" v-if="isFetching">
          <IconPokeball />
        </div>
        <img :src="pokemon?.frontSprite" :alt="pokemon?.name" class="pokemon-img" />
        <img
          src="../../assets/images/background-image.webp"
          alt="background image"
          class="background-img"
        />
      </header>
      <footer class="container-footer">
        <div class="container-info">
          <p class="text-info text-default">
            <strong class="text-title">Name:</strong>
            {{ capitalizeFirstLetter(pokemon?.name ?? '') }}
          </p>
          <p class="text-info text-default">
            <strong class="text-title">Weight:</strong> {{ pokemon?.weight }}
          </p>
          <p class="text-info text-default">
            <strong class="text-title">Height:</strong> {{ pokemon?.height }}
          </p>
          <p class="text-info text-default">
            <strong class="text-title">Types:</strong>
            {{ pokemon?.types.map((type) => capitalizeFirstLetter(type)).join(', ') }}
          </p>
        </div>
        <div class="container-btns">
          <button @click="copy()" class="btn-primary">
            {{ copied ? 'Copied!' : 'Share with friends' }}
          </button>
          <FavoriteButton :pokemon_name="pokemon?.name ?? ''" />
        </div>
      </footer>
    </article>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.pokemon-card {
  background-color: #fff;
  margin: 0 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 315px;
  max-width: 570px;
  max-height: 506px;
}

.container-images {
  position: relative;
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  border: none;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  background: transparent;
  cursor: pointer;
  transform: translate(-15px, 8px);
}

.pokemon-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 315px;
  object-fit: cover;
}

.background-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.container-footer {
  padding: 20px 30px;
}

.container-info {
  .text-info {
    padding: 8px 0;
    border-bottom: 1px solid #e8e8e8;
    font-size: 18px;
  }

  .text-title {
    color: var(--text-color-default);
  }

  :first-of-type {
    padding-top: 0;
  }
}

.container-btns {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}

.pokeball {
  animation: rotation 1.5s infinite;
  position: absolute;
}
</style>
