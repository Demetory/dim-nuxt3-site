<script setup lang="ts">
// Types
import type { IHamburger } from "@/types/IHamburger";

// Props
const props = defineProps({
  params: {
    type: Object as () => IHamburger,
    required: true,
  },
});

// Computed Properties
const getSize = computed(() => {
  return `${props.params.size}px`;
});

const getDisplay = computed(() => {
  return props.params.display;
});
</script>

<template>
  <div :class="['hamburger', `hamburger-${params.display}`, `hamburger-${params.isOpened}`]">
    <span v-for="index in 4" :key="`span-${index}`" />
  </div>
</template>

<style scoped lang="scss">
.hamburger {
  z-index: grid.$zindex-top;
  display: v-bind(getDisplay);
  width: v-bind(getSize);
  height: v-bind(getSize);
  justify-content: center;
  align-items: center;
  transform: rotate(0deg);
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  span {
    display: flex;
    position: absolute;
    height: 6px;
    width: 60%;
    opacity: 1;
    transform: rotate(0deg);
    transition: all 0.25s ease-in-out;
    cursor: pointer;
  }

  span:nth-child(1) {
    top: calc(50% - 18px);
  }
  span:nth-child(2) {
    bottom: calc(50% - 18px);
  }
  span:nth-child(3) {
    top: calc(50% - 3px);
  }
  span:nth-child(4) {
    top: 50%;
    width: 0%;
  }

  &-true span:nth-child(3),
  &-true span:nth-child(4) {
    width: 50%;
  }
  &-true span:nth-child(1),
  &-true span:nth-child(2) {
    width: 0%;
  }
  &-true span:nth-child(3) {
    top: calc(50% - 3px);
    transform: rotate(45deg);
  }
  &-true span:nth-child(4) {
    top: calc(50% - 3px);
    transform: rotate(-45deg);
  }
}

.theme-dark {
  .hamburger {
    background-color: colors.$grey-light;
    span {
      background-color: colors.$black;
    }
  }
}

.theme-light {
  .hamburger {
    background-color: colors.$grey-light;
    span {
      background-color: colors.$black;
    }
  }
}
</style>

