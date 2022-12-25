<script setup lang="ts">
// Modules
import type { ICube } from "@/types/ICube";

// Props
const props = defineProps({
  params: {
    type: Object as () => ICube,
    required: true,
  },
});

// Computed Properties
const getSize = computed(() => {
  return new String(props.params.size + "px");
});

const getDuration = computed(() => {
  return new String(props.params.duration + "s");
});
</script>

<template>
  <div class="cube">
    <NuxtLink to="/">
      <figure class="cube__figure">
        <span
          v-for="(edge, index) in params.edges"
          :key="`edge-${index}`"
          :class="['cube__edge', `cube__edge-${edge.name}`]"
        >
          <NuxtImg alt="Demetory Logo" :src="`/images/${edge.img}`" width="100%" height="100%" />
        </span>
      </figure>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$rotate-default: (
  "front": rotateY(0deg),
  "right": rotateY(90deg),
  "back": rotateY(180deg),
  "left": rotateY(-90deg),
  "top": rotateX(90deg),
  "bottom": rotateX(-90deg),
);

$rotate-animaton: (
  0%: rotateY(0deg),
  16.6%: rotateX(90deg),
  33.2%: rotateY(-90deg),
  49.8%: rotateY(-180deg),
  65.4%: rotateX(-90deg),
  82%: rotateY(90deg),
  100%: rotateY(0deg),
);

.cube {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(getSize);
  height: v-bind(getSize);

  &__figure {
    position: relative;
    width: v-bind(getSize);
    height: v-bind(getSize);
    transition: transform 1s;
    transform: translateZ(calc(v-bind(getSize) / 2));
    transform-style: preserve-3d;
    transform-origin: center;
    animation-name: spincube;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: v-bind(getDuration);
  }

  &__edge {
    position: absolute;
    width: v-bind(getSize);
    height: v-bind(getSize);
    line-height: v-bind(getSize);
    text-align: center;
    background-color: colors.$black;

    @each $name, $rotate in $rotate-default {
      &-#{$name} {
        transform: $rotate translateZ(calc(v-bind(getSize) / 2));
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes spincube {
  @each $percent, $rotate in $rotate-animaton {
    #{$percent} {
      transform: translateZ(calc(v-bind(getSize) / 2)) $rotate;
    }
  }
}
</style>
