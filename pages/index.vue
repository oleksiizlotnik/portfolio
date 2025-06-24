<script lang="ts" setup>
</script>

<template>
  <div class="space-y-8">
    <section class="flex flex-col items-center space-y-4">
      <img src="../assets/img/oleksii.jpeg" alt="oleksii zlotnik photo" class="w-16 h-16 rounded-full">
      <HomepageTitle />
      <HomepageAvailabalityBadge />
    </section>

    <section>
      <h2>Projects</h2>
      <ProjectsSlider />
    </section>

    <section>
      <div class="grid grid-cols-2 gap-8">
        <div class="col-span-2 lg:col-span-1 space-y-4">
          <h2>About me</h2>
          <p class="text-sm">Frontend Developer with 7+ years of experience building scalable, user-focused web applications, with a strong focus on Vue.js and the modern JavaScript ecosystem.</p>
          <p class="text-sm">Skilled in developing SPAs using Vue 3 (Composition API) and TypeScript, and in creating responsive, accessible UIs with clean component architecture. </p>
          <p class="text-sm">Comfortable working in agile, remote teams, including fast-paced SaaS environments.</p>
          <p class="text-sm">Based in Kyiv, Ukraine</p>
        </div>
        <div class="col-span-2 lg:col-span-1">
          <h2>Job experience</h2>
          <HomepageJobExperience />
        </div>
      </div>
    </section>

  </div>
</template>

<style>
</style>
