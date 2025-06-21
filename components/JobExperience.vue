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
    stack: ['Vue.js', 'Laravel', 'Inertia.js', 'Typescript', 'Tailwind', 'MySQL'],
    logo: MarketpediaLogo,
    start_date: '2024',
    end_date: '2025',
    link: '#'
  },
  {
    company: 'Marketpedia',
    position: 'Frontend Developer',
    description: 'Remote, Canada, Startup',
    stack: ['Vue.js', 'Tailwind', 'REST API'],
    logo: MarketpediaLogo,
    start_date: '2023',
    end_date: '2024',
    link: '#'
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
</script>

<template>
  <v-theme-provider>
    <div class="experience space-y-4">
      <div class="experience-item flex items-center gap-3" v-for="(item, index) in experiences">
        <span class="text-nowrap">{{ item.start_date }} – {{ item.end_date }}</span>
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
    </div>
  </v-theme-provider>
</template>


<style>

</style>