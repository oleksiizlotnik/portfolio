<script setup>
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Oleksii Zlotnik - Frontend Developer` : 'Oleksii Zlotnik - Frontend Developer';
  },
  description: 'Oleksii Zlotnik is a frontend developer with 4+ years of experience building scalable, user-focused web applications, with a strong focus on Vue.js and the modern JavaScript ecosystem.',
  ogTitle: 'Oleksii Zlotnik - Frontend Developer',
  ogDescription: 'Oleksii Zlotnik is a frontend developer with 4+ years of experience building scalable, user-focused web applications, with a strong focus on Vue.js and the modern JavaScript ecosystem.',
  ogImage: 'https://oleksiizlotnik.vercel.app/img/oleksii.jpeg',
})
</script>

<template>
<div>
  <NuxtRouteAnnouncer />
  <Analytics />
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</div>
</template>
