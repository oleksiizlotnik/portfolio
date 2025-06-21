<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { watch } from 'vue'

const theme = useTheme()

// Sync VueUse colorMode with Vuetify theme
// watch(mode, (newMode) => {
//   theme.global.name.value = newMode
// })

// Initial sync
// theme.global.name.value = mode.value
</script>

<template>
  <span class="cursor-pointer px-2" @click="theme.global.name.value = theme.global.name.value === 'dark' ? 'light' : 'dark'">
    <v-icon v-if="theme.global.name.value === 'dark'" size="small">mdi-weather-sunny</v-icon>
    <v-icon v-else size="small">mdi-weather-night</v-icon>
  </span>
</template>

<style>

</style>