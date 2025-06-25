<script setup>
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-vue-next';
</script>
<template lang="">
  <div class="mt-10 py-10 space-y-4">
    <h2 class="text-primary text-center">Let's keep in touch:</h2>
    <div class="flex gap-3 justify-center items-center">
      <a href="https://github.com/alexeyzlotnik" target="_blank"><GithubIcon class="text-primary" /></a>
      <a href="https://www.linkedin.com/in/alexeyzlotnik/" target="_blank"><LinkedinIcon class="text-primary" /></a>
      <a href="mailto:alexeyzlotnik@gmail.com" target="_blank"><Mail class="text-primary" /></a>
    </div>
  </div>
</template>
