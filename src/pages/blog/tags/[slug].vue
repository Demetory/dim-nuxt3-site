<script setup lang="ts">
// Data
const route = useRoute();

// Methods
definePageMeta({
  layout: "blog",
});

useHead({
  title: `Aritcles by Tag: '${route.params.slug}' — Blog Demetory`,
  meta: [
    {
      name: "description",
      content: `Demetory Blog. Aticles by Tag '${route.params.slug}'. All about Vue.js, Nuxt.js and Frontend-Development in common.`,
    },
  ],
});
</script>

<template>
  <div class="page-wrapper">
    <OrganismGetList :tag="route.params.slug" />
  </div>
</template>
