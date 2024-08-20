<script setup lang="ts">
import IconFavorite from '@/assets/icons/IconFavorite.vue'
import IconAll from '@/assets/icons/IconAll.vue'
import router from '@/router'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const valueInput = ref<string>((route.query.name as string) || '')

watchEffect(() => {
  valueInput.value = (route.query.name as string) || ''
})

const searchPokemon = () => {
  if (valueInput.value.trim()) {
    router.push({ name: 'pokemon-search', query: { name: valueInput.value } })
  }
}

const goFavorites = () => {
  valueInput.value = ''
  router.push({ name: 'pokemons-favorites' })
}

const goAll = () => {
  valueInput.value = ''
  router.push({ name: 'pokemons-all' })
}
</script>

<template>
  <main class="container">
    <div class="container-input">
      <input
        class="input-search"
        type="search"
        name="search"
        placeholder="Search"
        v-model="valueInput"
        @keyup.enter="() => searchPokemon()"
      />
    </div>
    <div class="list">
      <RouterView />
    </div>
    <nav class="nav-container">
      <button
        class="btn"
        :class="router.currentRoute.value.name === 'pokemons-all' ? 'btn-primary' : 'btn-secondary'"
        @click="goAll"
      >
        <IconAll class="icon" />
        All
      </button>
      <button
        class="btn"
        :class="
          router.currentRoute.value.name === 'pokemons-favorites' ? 'btn-primary' : 'btn-secondary'
        "
        @click="goFavorites"
      >
        <IconFavorite color="#ffff" class="icon" />
        Favorites
      </button>
    </nav>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .container-input {
    margin: 30px 0 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px 0;
    .input-search {
      max-width: 570px;
      width: 100%;
      border: none;
      border-radius: 5px;
      display: block;
      padding: 15px 4px 15px 40px;
      font-size: 16px;
      background: #ffffff
        url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljc1NTIgMTUuNTYyMkwxNC4yNDk5IDEyLjA1NzRDMTQuMDkxNyAxMS44OTkyIDEzLjg3NzIgMTEuODExMyAxMy42NTIyIDExLjgxMTNIMTMuMDc5MUMxNC4wNDk1IDEwLjU3MDUgMTQuNjI2MSA5LjAwOTY3IDE0LjYyNjEgNy4zMTE3OUMxNC42MjYxIDMuMjcyNzMgMTEuMzUyOCAwIDcuMzEzMDQgMEMzLjI3MzI5IDAgMCAzLjI3MjczIDAgNy4zMTE3OUMwIDExLjM1MDggMy4yNzMyOSAxNC42MjM2IDcuMzEzMDQgMTQuNjIzNkM5LjAxMTIxIDE0LjYyMzYgMTAuNTcyMyAxNC4wNDcxIDExLjgxMzQgMTMuMDc2OFYxMy42NDk4QzExLjgxMzQgMTMuODc0OCAxMS45MDEzIDE0LjA4OTIgMTIuMDU5NSAxNC4yNDc0TDE1LjU2NDggMTcuNzUyMkMxNS44OTUzIDE4LjA4MjYgMTYuNDI5NyAxOC4wODI2IDE2Ljc1NjcgMTcuNzUyMkwxNy43NTE3IDE2Ljc1NzNDMTguMDgyMiAxNi40MjY5IDE4LjA4MjIgMTUuODkyNiAxNy43NTUyIDE1LjU2MjJaTTcuMzEzMDQgMTEuODExM0M0LjgyNzMxIDExLjgxMTMgMi44MTI3MSA5LjgwMDYxIDIuODEyNzEgNy4zMTE3OUMyLjgxMjcxIDQuODI2NDggNC44MjM3OSAyLjgxMjIzIDcuMzEzMDQgMi44MTIyM0M5Ljc5ODc2IDIuODEyMjMgMTEuODEzNCA0LjgyMjk3IDExLjgxMzQgNy4zMTE3OUMxMS44MTM0IDkuNzk3MDkgOS44MDIyOCAxMS44MTEzIDcuMzEzMDQgMTEuODExM1oiIGZpbGw9IiNCRkJGQkYiLz4KPC9zdmc+Cg==')
        no-repeat 13px center;
      box-shadow: 0px 2px 10px 0px #0000000a;
    }
  }

  .list {
    padding: 0 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .nav-container {
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    box-shadow: 0px -5px 4px 0px #0000000d;
    padding: 0 30px 0;
    .btn {
      max-width: 275px;
      width: 100%;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .icon {
        color: #ffffff;
      }
    }
  }
}

.input-search::placeholder {
  color: #bfbfbf;
}
</style>
