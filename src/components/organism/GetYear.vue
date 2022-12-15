<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
</script>

<template>
  <p>
    <span>
      <AtomLink :params="contentStore.links.dim_shop" />
    </span>
    <span>{{ getYear() }} &copy; Demetory</span>
  </p>
</template>

<style scoped lang="scss">
p {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
span:not(:first-of-type) {
  margin-left: grid.$gap;
}
</style>
