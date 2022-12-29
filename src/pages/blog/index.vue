<script setup lang="ts">
// Methods
definePageMeta({
  layout: "blog",
});

useHead({
  title: "Blog — Demetory",
  meta: [
    { name: "description", content: "Demetory Blog. All about Vue.js, Nuxt.js and Frontend-Development in common." },
  ],
});
</script>

<template>
  <div class="page-wrapper">
    <OrganismGetList />
  </div>
</template>
