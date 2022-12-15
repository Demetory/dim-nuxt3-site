<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
</script>

<template>
  <nav class="navihire">
    <h2 class="navihire__title">Wanna hire me? →</h2>
    <AtomFlipper v-for="flipper in contentStore.navi_contacts" :key="`flipper-${flipper.img}`" :params="flipper" />
  </nav>
</template>

<style scoped lang="scss">
.navihire {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: grid.$gap;

  &__title {
    font-size: 2.2rem;
    font-weight: 400;
  }

  .flip-container {
    margin-left: grid.$gap;
  }
}
</style>
