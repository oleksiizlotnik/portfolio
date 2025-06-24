<script lang="ts" setup>
  import projectsData from '~/assets/data/projects'
import type { Project } from '~/assets/types/definitions';

const projects = computed<Project[]>(() => {
  return projectsData
})
</script>
<template>
  <ClientOnly>
    <ProjectsAnimatedProjects :projects="projects" />
  </ClientOnly>
</template>


<style>

</style>