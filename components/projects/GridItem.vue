<script lang="ts" setup>
import type { Project } from '~/assets/types/definitions';
import { GithubIcon } from 'lucide-vue-next';

withDefaults(defineProps<{
  project: Project
}>(), {
  project: undefined
})

const emit = defineEmits<{
  openProjectModal: [value: number]
}>()
</script>
<template><template v-if="project"><v-card variant="tonal" class="mx-auto h-full" @click="emit('openProjectModal', project.id)">
    <v-img :src="project.image" height="300" width="100%" :cover="true" class="p-0" />
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          <h3 class="cursor-pointer">{{ project.name }}</h3>
        </div>
        <div class="text-caption">{{ project.short_description }}</div>
      </div>
    </v-card-item>

    <v-card-actions class="flex justify-between">
      <v-btn @click="emit('openProjectModal', project.id)">
        Learn more
      </v-btn>
      <v-btn v-if="project.github_url"
        @click.stop="() => navigateTo(project.github_url, { external: true, open: { target: '_blank' } })">
        <GithubIcon /> Github
      </v-btn>
    </v-card-actions>
  </v-card></template></template>

<style></style>