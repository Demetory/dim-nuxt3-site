<script setup lang="ts">
// Modules
import { useEventListener } from "@vueuse/core";

// Data
const kreuz = ref<HTMLElement>();
let rotation = 0;

// Methods
if (process.client) {
  const rotateKreuz = useEventListener(document, "wheel", (evt) => {
    evt.deltaY < 0 ? rotation-- : rotation++;
    kreuz.value!.style.transform = `rotate(${rotation * 20}deg)`;
  });

  onBeforeUnmount(() => {
    rotateKreuz();
  });
}
</script>

<template>
  <div ref="kreuz" class="kreuz" />
</template>

<style scoped lang="scss">
.kreuz {
  z-index: calc(grid.$zindex-top + 200);
  position: fixed;
  top: calc(grid.$gap / 2);
  right: calc(grid.$gap / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: grid.$gap;
  height: grid.$gap;

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    width: 1px;
    height: calc(100% + 1px);
  }
  &::after {
    height: 1px;
    width: calc(100% + 1px);
  }
}

.theme-dark .kreuz {
  &::before,
  &::after {
    background-color: colors.$grey-light;
  }
}

.theme-light .kreuz {
  &::before,
  &::after {
    background-color: colors.$grey-dark;
  }
}
</style>
