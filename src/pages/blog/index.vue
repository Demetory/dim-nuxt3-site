<script setup lang="ts">
// Methods
definePageMeta({
  title: "common.siteNavi.blog",
  layout: "blog",
});

useHead({
  meta: [{ name: "description", content: "NuxtContent Starter Template" }],
});
</script>

<template>
  <div class="page-wrapper">
    <OrganismGetList />
  </div>
</template>
