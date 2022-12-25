<script setup lang="ts">
// Props
const props = defineProps<{
  tag: string;
  type?: string;
}>();

// Computed Properties
const getType = computed(() => {
  return props.type ? `tag-${props.type}` : null;
});
</script>

<template>
  <span :class="['tag', getType]">
    <NuxtLink v-if="type && type === 'all'" to="/blog">All</NuxtLink>
    <NuxtLink v-else :to="`/blog/tags/${tag}`"> {{ tag }} </NuxtLink>
  </span>
</template>

<style scoped lang="scss">
.tag {
  &:not(:last-of-type) {
    margin-right: 2rem;
  }

  a {
    display: inline-flex;
    margin-bottom: 2rem;
    padding: 1rem 1.6rem;
    border: solid 1px colors.$green;
    border-radius: 8px;
    color: colors.$green;
    transition: all grid.$transition;
    background-color: transparent;

    &.router-link-exact-active {
      color: colors.$black;
      background-color: colors.$green;
      cursor: default;
    }

    &:hover:not(.router-link-exact-active) {
      color: colors.$white;
      background-color: colors.$green;
    }
  }
}
</style>
