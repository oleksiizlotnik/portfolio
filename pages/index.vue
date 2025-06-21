<script lang="ts" setup></script>

<template>
  <div class="space-y-8">
    <section>
      *photo here
      <h1>
        Hi there 👋
        <br/>
        Oleksii Zlotnik – Passionate Frontend Developer
      </h1>
    </section>

    <section>
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 lg:col-span-1 space-y-4">
          <h2>Get me know better</h2>
          <p class="text-xs">Frontend Developer with 7+ years of experience building scalable, user-focused web applications, with a strong focus on Vue.js and the modern JavaScript ecosystem.</p>
          <p class="text-xs">Skilled in developing SPAs using Vue 3 (Composition API) and TypeScript, and in creating responsive, accessible UIs with clean component architecture. </p>
          <p class="text-xs">Comfortable working in agile, remote teams, including fast-paced SaaS environments.</p>
          <p class="text-xs">Based in Kyiv, Ukraine</p>
        </div>
        <div class="col-span-2 lg:col-span-1">
          <h2>Job experience</h2>
          <JobExperience />
        </div>
      </div>
    </section>

    <section>
      <h2>Projects</h2>
      *Slider here or some fancy block
    </section>

    <section>
      <h2>Let's get in touch</h2>
      *if status is available for projects, then show message 1, otherwise – should message 2
    </section>

  </div>
</template>

<style></style>
