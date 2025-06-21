<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')

const links = [
   {
      'route': '/',
      'label': 'Home'
   },
   {
      'route': 'projects',
      'label': 'Projects'
   }
]
</script>

<template lang="">
   <header
      class="fixed z-10 top-5 left-1/2 -translate-x-1/2 w-wit border border-1 rounded-full backdrop-blur-md"
      :class="isDark ? 'bg-white/30' : 'bg-gray-200/30'"
   >
      <div class="flex gap-3">
         <NuxtLink
           v-for="(link, index) in links"
           :key="index"
           :to="link.route"
           class="text-decoration-none"
         >
           <v-btn
             variant="text"
             rounded="xl"
             size="small"
             :class="isDark ? 'text-white' : 'text-black'"
           >
             {{ link.label }}
           </v-btn>
         </NuxtLink>

         <ColorModeButton />
      </div>
   </header>
</template>