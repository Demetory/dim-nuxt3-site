<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const slogans = contentStore.slogan;
const slogan = ref(slogans[0]);
const intervalSloganID = setInterval(getSlogan, 30000);

// Methods
onBeforeUnmount(() => {
  clearInterval(intervalSloganID);
});

function getSlogan() {
  const random = Math.floor(Math.random() * slogans.length);
  slogan.value = slogans[random];
}
</script>

<template>
  <small class="slogan">
    {{ slogan }}
  </small>
</template>

<style scoped lang="scss">
.slogan {
  z-index: 200;
  position: fixed;
  display: block;
  bottom: calc(50% - 200px);
  right: calc(-400px + grid.$gap * 2);
  width: 400px;
  height: 12px;
  text-align: center;
  transform-origin: bottom left;
  transform: rotate(-90deg);
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  opacity: 0.75;
  transition: all grid.$transition;
  user-select: none;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    height: 1px;
    width: 25px;
  }
}

@media screen and (max-width: 800px) {
  .slogan {
    right: calc(-400px + grid.$gap);
  }
}

.mode-dark .slogan {
  color: colors.$font-grey;

  &::before {
    background: colors.$font-grey;
  }
}

.mode-light .slogan {
  color: colors.$font-black;

  &::before {
    background: colors.$font-black;
  }
}
</style>
