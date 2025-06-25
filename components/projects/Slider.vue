<script lang="ts" setup>
import { ref } from 'vue'
import projectsData from '~/assets/data/projects'
import type { Project } from '~/assets/types/definitions';

const modalOpen = ref<boolean>(false)
const selectedProject = ref<Project>(null)

const projects = computed<Project[]>(() => {
  return projectsData
})

function openProjectModal(id: number): Project {
  selectedProject.value = projects.value.find(pr => pr.id === id)
  modalOpen.value = true
}
</script>
<template>
  <ClientOnly>
    <ProjectsAnimatedProjects :projects="projects" @openProjectModal="openProjectModal" />
  </ClientOnly>
  <Teleport to="body">
    <ProjectsDetailsModal :project="selectedProject" :open="modalOpen" @update:open="(val) => modalOpen = val"/>
  </Teleport>
</template>


<style>

</style>