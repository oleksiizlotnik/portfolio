<script lang="ts" setup>
import type { Course } from '~/assets/types/definitions'
import { Motion } from 'motion-v'

const props = defineProps<{
  courses: Course[]
}>()

const images = ref<string[]>([
  {
    course_id: 'x015K3GeS3SWJfRiDW2i8IQbQ==',
    image: '/img/courses/udemy-english.webp'
  },
  {
    course_id: 'x01PbtvBw5u3i1aM0zh9tBC9g==',
    image: '/img/courses/udemy-new.webp'
  },
  {
    course_id: 'x01A-sGTkWM_koHmhIEKqIsIA==',
    image: '/img/courses/udemy-old.jpg'
  }
])

const openCourse = (url: string) => {
  const courseLink = `https://www.udemy.com${url}`
  window.open(courseLink, '_blank')
}

const filteredCourses = computed(() => {
  if (props.courses) {
    return props.courses.filter((course) => course.is_published)
  }
  return []
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <CoursesGridSkeleton v-if="!filteredCourses.length" />
    <template v-else>
      <Motion v-for="(course, index) in filteredCourses" :key="course.id || index"
        as="div"
        :initial="{
          y: 20,
          opacity: 0,
        }"
        :animate="{
          y: 0,
          opacity: 1,
        }"
        :transition="{
          duration: 0.5,
          ease: 'easeInOut',
          delay: 0.2 * index,
        }"
      >
        <v-card variant="tonal" class="p-4" :id="course.id || index">
          <v-img :src="images.find((image) => image.course_id === course.id)?.image" />
          <h4 class="text-primary px-4 my-4">{{ course?.title }}</h4>
          <p class="text-primary px-4">{{ course?.headline }}</p>
          <v-card-text class="flex items-center gap-2">
            <v-icon icon="mdi-star" color="#4ade80" /> {{ course?.rating.toFixed(1) }} ({{ course?.num_reviews }} reviews)
          </v-card-text>
          <v-card-actions class="mt-4">
            <v-btn @click="openCourse(course.url)" variant="text" color="#4ade80" prepend-icon="mdi-open-in-new">Buy course on Udemy</v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
    </template>
  </div>
</template>


<style>

</style>