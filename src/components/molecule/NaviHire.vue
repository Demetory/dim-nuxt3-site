<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
</script>

<template>
  <nav class="navihire">
    <h2 class="navihire__title">Wanna hire me? →</h2>
    <div class="flippers">
      <AtomFlipper v-for="flipper in contentStore.navi_contacts" :key="`flipper-${flipper.img}`" :params="flipper" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navihire {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: auto;

  &__title {
    font-size: 2.2rem;
    font-weight: 400;
  }

  .flippers {
    display: flex;
    flex-direction: row;

    .flip-container {
      margin-left: grid.$gap;
    }
  }

  @media screen and (max-width: 1280px) {
    .flippers {
      .flip-container {
        margin-left: 10px;
      }
    }
  }
}
</style>
