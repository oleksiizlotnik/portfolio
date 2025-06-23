<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import MarketpediaLogo from '@/components/logos/MarketpediaLogo.vue'
import UpworkLogo from '@/components/logos/UpworkLogo.vue'

const theme = useTheme()

const isDark = computed(() => {
  return theme?.global.name.value === 'dark'
})

type Experience = {
  company: string,
  position: string,
  description: string,
  stack: string[],
  logo: any,
  start_date: string,
  end_date: string,
  customColor?: boolean,
  link: string,
}

const experiences = ref<Experience[]>([
  {
    company: 'Marketpedia',
    position: 'Full Stack Developer',
    description: 'Remote, Canada, Startup',
    stack: ['Vue.js', 'Laravel', 'Inertia.js', 'Typescript', 'Tailwind', 'PostgreSQL', 'Pinia', 'SCSS', 'Shadcn UI', 'Blade', 'Vite', 'Git', 'ChartJS'],
    logo: MarketpediaLogo,
    start_date: '2024',
    end_date: '2025',
    link: 'https://marketpedia.ca'
  },
  {
    company: 'Marketpedia',
    position: 'Frontend Developer',
    description: 'Remote, Canada, Startup',
    stack: ['Vue.js', 'Tailwind', 'REST API', 'Pinia', 'SCSS', 'Vite', 'Git', 'ChartJS'],
    logo: MarketpediaLogo,
    start_date: '2023',
    end_date: '2024',
    link: 'https://marketpedia.ca'
  },
  {
    company: 'Upwork',
    position: 'Frontend Developer',
    description: 'Remote, Freelance',
    stack: ['PHP', 'Wordpress', 'MySQL', 'jQuery'],
    logo: UpworkLogo,
    start_date: '2017',
    end_date: '2023',
    customColor: true,
    link: 'https://www.upwork.com/freelancers/oleksiizlotnik'
  }
])

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