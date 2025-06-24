<script lang="ts" setup>
defineProps([
  'project'
])
</script>
<template>
  <v-card
      color="primary"
      class="mx-auto"
    >
      <v-card-item>
        <div>
          <div class="text-h6 mb-1">
            {{ project.name }}
          </div>
          <div class="text-caption">{{ project.description }}</div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-btn>
          Learn more
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<style>

</style>