<script setup lang="ts">
// Types
import type { IFlipper } from "@/types/IFlipper";

// Props
const props = defineProps({
  params: {
    type: Object as () => IFlipper,
    required: true,
  },
});

// Computed Properties
const getSize = computed(() => {
  return new String(props.params.size + "px");
});
</script>

<template>
  <div class="flip-container">
    <a :href="params.url" target="_blank" rel="noopener noreferrer">
      <span class="front">
        <NuxtImg :alt="params.alt" :src="`/images/${params.img}-front.svg`" width="100%" height="100%" />
      </span>
      <span class="back">
        <NuxtImg :alt="params.alt" :src="`/images/${params.img}-back.svg`" width="100%" height="100%" />
      </span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.flip-container {
  display: inline-flex;
  perspective: v-bind(getSize);
  width: v-bind(getSize);
  height: v-bind(getSize);
  cursor: pointer;

  &:hover {
    > a {
      transform: rotateY(180deg);
    }
  }

  > a {
    position: relative;
    display: inline-flex;
    width: 100%;
    height: 100%;
    transition: all grid.$transition;
    transform-style: preserve-3d;

    .back,
    .front {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }

    .front {
      z-index: 2;
      transform: rotateY(0deg);
    }

    .back {
      z-index: 1;
      transform: rotateY(180deg);
    }
  }

  /*
  @media screen and (max-width: 1280px) {
    width: calc(v-bind(getSize) / 1.25);
    height: calc(v-bind(getSize) / 1.25);

    img {
      width: calc(v-bind(getSize) / 1.25);
      height: calc(v-bind(getSize) / 1.25);
    }
  }
  */
}
</style>
