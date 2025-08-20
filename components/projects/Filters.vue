<script lang="ts" setup>
import { capitalize } from 'vue';

const props = withDefaults(defineProps<{
  tag: string
}>(), {
  tag: 'all'
})

const tags = ['all', 'vue.js', 'react.js', 'wordpress']
const activeTag = ref<string>(props.tag)

const emit = defineEmits<{
  applyFilters: [tag: string]
}>()
</script>
<template>
<div class="mb-8 space-y-4">
  <h2>Filters</h2>
  <v-btn-toggle v-model="activeTag" v-on:update:model-value="emit('applyFilters', activeTag)" group>
    <v-btn v-for="(filterTag, i) in tags" :value="filterTag" :key="i">
      {{ capitalize(filterTag) }}
    </v-btn>
  </v-btn-toggle>
</div>
</template>

<style></style>