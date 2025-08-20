<script lang="ts" setup>
import { ref } from 'vue'
import type { Project } from '~/assets/types/definitions';
import { Motion } from 'motion-v'

const props = withDefaults(defineProps<{
  projects: Project[] | null,
}>(), {
  projects: null
})

const selectedProject = ref<Project | undefined>(undefined)
const modalOpen = ref<boolean>(false)

function openProjectModal(id: number): void {
  selectedProject.value = props.projects?.find(pr => pr.id === id) ?? undefined
  modalOpen.value = true
}
</script>

<template><v-row>
  <Motion v-for="(project, index) in projects" :key="project.id" as="div" class="v-col-md-6 v-col-12" :initial="{
    y: 20,
    opacity: 0,
  }" :animate="{
    y: 0,
    opacity: 1,
  }" :transition="{
    duration: 0.5,
    ease: 'easeInOut',
    delay: 0.2 * index,
  }">
    <ProjectsGridItem :project="project" @openProjectModal="openProjectModal" />
  </Motion>
</v-row>
<Teleport to="body">
  <ProjectsDetailsModal :project="selectedProject" :open="modalOpen" @update:open="(val: boolean) => modalOpen = val" />
</Teleport>
</template>


<style></style>