<script lang="ts" setup>
import { useFetch } from 'nuxt/app'
import { useSessionStorage } from '@vueuse/core'
import { ref, onMounted } from 'vue'

const courses = useSessionStorage('courses', []) // key, default value

onMounted(async () => {
  if (!courses.value || courses.value.length === 0) {
    const { data } = await useFetch('/api/udemy-courses', {
      key: 'courses',
      transform: (data) => data.results
    })
    courses.value = data.value
  }
})
</script>

<template>
  <div>
    <CoursesGrid :courses="courses" />
  </div>
</template>

<style>

</style>