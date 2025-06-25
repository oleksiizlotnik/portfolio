<script lang="ts" setup>
import { FlickeringGrid } from '~/components/ui/flickering-grid';
</script>


<template>
  <div>
    <!-- <ClientOnly>
      <FlickeringGrid
        class="fixed left-0 top-0 w-100vw h-100vh z-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        :square-size="4"
        :grid-gap="6"
        color="#60A5FA"
        :max-opacity="0.5"
        :flicker-chance="0.1"
      />
    </ClientOnly> -->
    <v-container :max-width="900" class="border-x border-1 min-h-screen flex flex-col !pt-[100px] px-8">
      <AppHeader />
      <slot />
      <AppFooter/>
    </v-container>
  </div>
</template>