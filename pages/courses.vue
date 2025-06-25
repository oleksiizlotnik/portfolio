<script lang="ts" setup>
import { useFetch } from 'nuxt/app'
import { useSessionStorage } from '@vueuse/core'
import { ref, onMounted, watch } from 'vue'

const courses = useSessionStorage('courses', []) // key, default value

async function fetchCourses() {
  if (!courses.value || courses.value.length === 0) {
    const { data } = await useFetch('/api/udemy-courses', {
      key: 'courses',
      transform: (data) => data.results
    })
    courses.value = data.value
  }
}

watch(courses, (newVal) => {
  if (!newVal || newVal.length === 0) {
    fetchCourses()
  }
})

onMounted(async () => {
  await fetchCourses()
})
</script>

<template>
  <div>
    <CoursesGrid :courses="courses" />
  </div>
</template>

<style>

</style>