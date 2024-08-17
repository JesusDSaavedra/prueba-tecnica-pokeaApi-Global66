<script setup lang="ts">
import FavoriteButton from './FavoriteButton.vue'
import IconClose from '@/assets/icons/IconClose.vue'

const emit = defineEmits(['close'])

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
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          alt="pokemon image"
          class="pokemon-img"
        />
        <img
          src="../assets/images/background-image.webp"
          alt="background image"
          class="background-img"
        />
      </header>
      <footer class="container-footer">
        <div class="container-info">
          <p class="text-info text-default"><strong class="text-title">Name:</strong> Squirtle</p>
          <p class="text-info text-default"><strong class="text-title">Weight:</strong> 20</p>
          <p class="text-info text-default"><strong class="text-title">Height:</strong> 18</p>
          <p class="text-info text-default">
            <strong class="text-title">Types:</strong> Normal, Watter
          </p>
        </div>
        <div class="container-btns">
          <button class="btn-primary">Share to my friends</button>
          <FavoriteButton />
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
  background-color: #ffffff;
  margin: 0 30px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-width: 315px;
  max-width: 570px;
  max-height: 506px;
  .container-images {
    position: relative;
    height: 220px;

    .btn-close {
      position: absolute;
      right: 0;
      z-index: 100;
      margin: 14px;
      border: none;
      border-radius: 50%;
      width: 26px;
      height: 26px;
      background: transparent;
      cursor: pointer;
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
  }
  .container-footer {
    padding: 20px 30px;
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
  }
}
</style>
