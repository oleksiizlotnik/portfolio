<script lang="ts" setup>
import { ref } from 'vue'
import { motion } from 'motion-v';

const status = ref<'not-available' | 'available'>('not-available')

function bookMetting() {
  if (status.value !== 'available')
    return;

  window.open('https://calendly.com/alexeyzlotnik', '_blank')
}
</script>

<template>
  <motion.div
    class="status flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-opacity-10"
    :class="status === 'available' ? 'hover:bg-green-600 cursor-pointer' : ''"
    @click="bookMetting"
    as="span"
    :initial="{
        filter: 'blur(10px)',
        opacity: 0,
        y: 5,
    }"
    :animate="{
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
    }"
    :transition="{
        duration: 0.4,
        ease: 'easeInOut',
        delay: 0.5,
    }"
  >
    <v-tooltip
      activator="parent"
      location="bottom"
      :opacity="10"
      open-delay="1000"
    >Let's book a meeting</v-tooltip>
    <span class="relative flex size-2">
      <!-- availability pulsing dot -->
      <span
        class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
        :class="status === 'available' ? 'bg-green-400' : 'bg-red-400'"
      ></span>

      <span
        class="relative inline-flex size-2 rounded-full"
        :class="status === 'available' ? 'bg-green-400' : 'bg-red-400'"
      ></span>

    </span>
    <!-- availability text -->
    <span :class="status === 'available' ? 'text-green-400' : 'text-red-400'">
      {{ status === 'available' ? 'Open to work' : 'Not available' }}
    </span>

  </motion.div>
</template>


<style>

</style>