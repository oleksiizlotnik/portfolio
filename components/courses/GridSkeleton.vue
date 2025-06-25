<template>
      <v-col v-for="i in 3" :key="i" class="p-4">
        <v-skeleton-loader
          class="mx-auto border"
          type="card, heading, button"
        ></v-skeleton-loader>
      </v-col>
</template>

