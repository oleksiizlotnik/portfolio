<script lang="ts" setup>
import { ref } from 'vue'
import projectsData from '~/assets/data/projects'
import type { Project } from '~/assets/types/definitions';

const modalOpen = ref<boolean>(false)
const selectedProject = ref<Project | undefined>(undefined)

const projects = computed<Project[]>(() => {
  return projectsData.slice(0, 3) // show first 3 projects
})

function openProjectModal(id: number): void {
  selectedProject.value = projects.value.find(pr => pr.id === id) ?? undefined
  modalOpen.value = true
}
</script>
<template>
<ClientOnly>
  <ProjectsAnimatedProjects :projects="projects" @openProjectModal="openProjectModal" />
</ClientOnly>
<Teleport to="body">
  <ProjectsDetailsModal :project="selectedProject" :open="modalOpen" @update:open="(val) => modalOpen = val" />
</Teleport>
</template>


<style></style>