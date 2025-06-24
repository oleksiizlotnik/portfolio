<script lang="ts" setup>
import { ref, computed } from 'vue'
import projectsData from '~/assets/data/projects'
import type { Project } from '~/assets/types/definitions';

const projects = computed<Project[]>(() => {
  return projectsData
})
</script>

<template>
  <v-row>
  <v-col
      v-for="(project, i) in projects"
      :key="i"
      cols="12"
      md="6"
    >
      <ProjectsGridItem :project="project" />
    </v-col>
  </v-row>
</template>


<style>

</style>