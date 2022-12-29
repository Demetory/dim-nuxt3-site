<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const heading = contentStore.heading.home;

// Methods
useHead({
  title: "Demetory",
  meta: [
    {
      name: "description",
      content: "Demetory. Code, Design, Prototype. Creating Sites and Apps - creative simplicity. ",
    },
  ],
});
</script>

<template>
  <div class="page-wrapper">
    <AtomNoise />
    <OrganismGetLastPost />
    <AtomHeading :heading="heading" />
    <AtomHole />
  </div>
</template>
