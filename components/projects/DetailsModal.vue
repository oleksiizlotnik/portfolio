<script lang="ts" setup>
import type { Project } from '~/assets/types/definitions';
import { computed } from 'vue';
import { Motion } from "motion-v"


const props = withDefaults(defineProps<{
  project?: Project | undefined,
  open?: boolean
}>(), {
  project: () => null as any,
  open: false
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value)
})
</script>

<template><v-dialog v-model="isOpen">
  <v-card title="Project details">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <div class="flex flex-col gap-6 sticky top-8">
            <h2>{{ project.name }}</h2>
            <p v-if="project.position">Position: {{ project.position }}</p>
            <p v-html="project.description" />
            <div>
              <h3>Stack:</h3>
              <v-chip-group class="experience-item__stack flex gap-1" column>
                <v-chip size="small" v-for="(stackItem, idx) in project.stack" :key="idx">
                  {{ stackItem }}
                </v-chip>
              </v-chip-group>
            </div>
            <span v-if="project.url">
              App url:
              <a :href="project.url" target="_blank" class="hover:underline text-green-400">{{ project.url }}</a>
            </span>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="flex flex-col gap-5">
          <Motion v-for="(image, idx) in project.all_images" :key="idx" as="div" :initial="{
            filter: 'blur(10px)',
            opacity: 0,
            y: 5,
          }" :animate="{
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
          }" :transition="{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.02 * idx,
              }" class="inline-block mt-4">
            <NuxtImg :src="image" :alt="project.name" width="100%" height="auto" :draggable="false"
              class="rounded-lg object-cover object-center" />
          </Motion>
        </v-col>
      </v-row>

    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="bg-background w-full fixed bottom-0 right-0">
      <v-spacer></v-spacer>

      <v-btn text="Close" variant="plain" @click="emit('update:open', false)"></v-btn>
    </v-card-actions>
  </v-card>
</v-dialog></template>


<style></style>