<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const heading = contentStore.heading.home;

// Methods
definePageMeta({
  title: "common.siteNavi.home",
});

useHead({
  meta: [{ name: "description", content: "Demetory. Creating Sites and Apps - creative simplicity." }],
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
