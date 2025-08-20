<script lang="ts" setup>
import { Motion } from "motion-v";
import type { Project } from '~/assets/types/definitions';

interface Props {
  projects?: Project[];
  autoplay?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [],
  autoplay: () => false,
  duration: 5000,
});

const emit = defineEmits<{
  openProjectModal: [value: number]
}>()

const active = ref(0);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interval = ref<any>();

const activeProjectDescription = computed(() => {
  return props.projects[active.value].short_description.split(" ");
});

onMounted(() => {
  if (props.autoplay) {
    interval.value = setInterval(handleNext, props.duration);
  }
});

onUnmounted(() => {
  if (!interval.value) {
    clearInterval(interval.value);
  }
});

function handleNext() {
  active.value = (active.value + 1) % props.projects.length;
}

function handlePrev() {
  active.value = (active.value - 1 + props.projects.length) % props.projects.length;
}

function isActive(index: number) {
  return active.value === index;
}

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10;
}
</script>


<template>
<div class="mx-auto max-w-sm pt-10 font-sans antialiased lg:px-12 md:max-w-4xl md:px-8">
  <div class="relative grid grid-cols-1 gap-20 md:grid-cols-2">
    <div>
      <div class="relative h-80 w-full">
        <AnimatePresence>
          <Motion v-for="(project, index) in props.projects" :key="project.image" as="div" :initial="{
            opacity: 0,
            scale: 0.9,
            z: -100,
            rotate: randomRotateY(),
          }" :animate="{
            opacity: isActive(index) ? 1 : 0.7,
            scale: isActive(index) ? 1 : 0.95,
            z: isActive(index) ? 0 : -100,
            rotate: isActive(index) ? 0 : randomRotateY(),
            zIndex: isActive(index) ? 40 : projects.length + 2 - index,
            y: isActive(index) ? [0, -80, 0] : 0,
          }" :exit="{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }" :transition="{
                duration: 0.4,
                ease: 'easeInOut',
              }" class="absolute inset-0 origin-bottom">
            <NuxtImg :src="project.image" :alt="project.name" width="500" height="500" :draggable="false"
              class="size-full rounded-3xl object-cover object-center cursor-pointer hover:scale-[105%] transition-all duration-300"
              @click="emit('openProjectModal', project.id)" />
          </Motion>
        </AnimatePresence>
      </div>
    </div>
    <div class="flex flex-col justify-between py-4">
      <Motion :key="active" as="div" :initial="{
        y: 20,
        opacity: 0,
      }" :animate="{
        y: 0,
        opacity: 1,
      }" :exit="{
            y: -20,
            opacity: 0,
          }" :transition="{
            duration: 0.2,
            ease: 'easeInOut',
          }">
        <h3 class=" cursor-pointer hover:underline" @click="emit('openProjectModal', props.projects[active].id)">
          {{ props.projects[active].name }}
        </h3>
        <p class="text-sm" v-if="props.projects[active].position">
          {{ props.projects[active].position }}
        </p>
        <Motion as="p" class="mt-8 text-lg">
          <Motion v-for="(word, index) in activeProjectDescription" :key="index" as="span" :initial="{
            filter: 'blur(10px)',
            opacity: 0,
            y: 5,
          }" :animate="{
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
          }" :transition="{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.02 * index,
              }" class="inline-block">
            {{ word }}&nbsp;
          </Motion>
        </Motion>
        <Motion as="div" :initial="{
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
                delay: 0.02 * index,
              }" class="inline-block mt-4">
          <v-btn variant="tonal" @click="emit('openProjectModal', props.projects[active].id)">
            Read more
          </v-btn>
        </Motion>
      </Motion>
      <div class="flex gap-4 pt-12 md:pt-0">
        <v-btn icon="mdi-chevron-left" variant="text" @click="handlePrev" />
        <v-btn icon="mdi-chevron-right" variant="text" @click="handleNext" />
      </div>
    </div>
  </div>
</div>
</template>
