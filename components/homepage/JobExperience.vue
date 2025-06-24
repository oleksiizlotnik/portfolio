<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import type { Experience } from '~/assets/types/definitions';
import experienceData from '~/assets/data/experience';

const theme = useTheme()

const isDark = computed(() => {
  return theme?.global.name.value === 'dark'
})

const experiences = computed<Experience[]>(() => {
  return experienceData
})

const stackColors = ref<string[]>([
  'primary',
  'secondary',
  'red',
  'green',
  'blue',
  'orange'
])
</script>

<template>
  <v-theme-provider>
    <div class="experience space-y-4">
      <div class="experience-item flex-col" v-for="(item, index) in experiences" key="index">
        <div class="experience-item__timeline flex items-center gap-3">
          <span class="text-nowrap text-xs">{{ item.start_date }} – {{ item.end_date }}</span>
          <v-divider class="border-opacity-50"></v-divider>
          <a :href="item.link" target="_blank" class="flex items-center justify-end gap-1">
            <p class="text-nowrap text-xs">{{ item.position }} at</p>
            <component
              :is="item.logo"
              :color="item.customColor ? (isDark ? '#fff' : '#000') : undefined"
              class="h-6 w-auto"
            />
          </a>
        </div>
        <v-chip-group class="experience-item__stack flex gap-1" column>
          <!-- TODO: color doesn't work -->
          <v-chip size="x-small" v-for="(stackItem, idx) in item.stack" :color="stackColors[idx]" class="text-[12px]" :key="idx">
            {{ stackItem }}
          </v-chip>
        </v-chip-group>
      </div>
    </div>
  </v-theme-provider>
</template>


<style>

</style>