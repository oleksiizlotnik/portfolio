  <script lang="ts" setup>
  import projectsData from '~/assets/data/projects'
  import type { Project } from '~/assets/types/definitions';


  useHead({
    title: 'Projects',
  })

  const filterTag = ref<string>('all')

  // helper function
  const filterProjectsByTag = (projects: Project[]): Project[] => {
    if (filterTag.value === 'all')
      return projects;

    return projects.filter((pr: Project) => pr.stack.map((tag) => tag.toLowerCase()).includes(filterTag.value))
  }

  const projects = computed<Project[]>(() => {
    return filterProjectsByTag(projectsData)
  })

</script>

<template>
<div>
  <ProjectsFilters :tag="filterTag" @applyFilters="(tag: string) => filterTag = tag" />
  <ProjectsGrid :projects="projects" />
</div>
</template>


<style></style>