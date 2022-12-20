<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
</script>

<template>
  <nav class="mainnavi">
    <NuxtLink v-for="(link, index) in contentStore.navi" :key="`navi-${index}`" :to="link.path">
      {{ $t(`${link.translate}`) }}
    </NuxtLink>
    <AtomLink :params="contentStore.links.dim_github" />
    <AtomLink :params="contentStore.links.dim_behance" />
  </nav>
</template>

<style scoped lang="scss">
.mainnavi {
  z-index: 2;
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 1rem;

  a {
    margin-top: -6px;
    margin-left: 3rem;
    font-size: 2.6rem;
    font-weight: 400;
  }
}
</style>
