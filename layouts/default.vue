<template>
  <div>
    <v-container :max-width="800" class="border-x border-1 min-h-screen flex flex-col !pt-[60px]">
      <AppHeader />
        <slot />
      <AppFooter/>
    </v-container>
  </div>
</template>

<script lang="ts" setup>

</script>
