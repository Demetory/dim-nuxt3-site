<script setup lang="ts">
// Modules
import type { ISlogan } from "@/types/ISlogan";

// Props
const props = defineProps({
  params: {
    type: Object as () => ISlogan,
    required: true,
  },
});

// Data
const slogan = ref(props.params.slogans[0]);
const intervalSloganID = setInterval(getSlogan, props.params.delay);

// Methods
onBeforeUnmount(() => {
  clearInterval(intervalSloganID);
});

function getSlogan() {
  const random = Math.floor(Math.random() * props.params.slogans.length);
  slogan.value = props.params.slogans[random];
}
</script>

<template>
  <small class="slogan">
    {{ slogan }}
  </small>
</template>

<style scoped lang="scss">
$width: 400px;
$height: 12px;

.slogan {
  position: fixed;
  display: block;
  bottom: calc(50% - $width / 2);
  right: calc(($width * -1) + grid.$gap * 2);
  width: $width;
  height: $height;
  text-align: center;
  transform-origin: bottom left;
  transform: rotate(-90deg);
  text-align: center;
  font-size: $height;
  letter-spacing: 0.05em;
  user-select: none;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    height: 1px;
    width: 15px;
  }

  @media screen and (max-width: 800px) {
    right: calc(($width * -1) + grid.$gap);
  }
}

.theme-dark .slogan {
  color: colors.$grey-light;

  &::before {
    background: colors.$grey-light;
  }
}

.theme-light .slogan {
  color: colors.$grey-dark;

  &::before {
    background: colors.$grey-dark;
  }
}
</style>
