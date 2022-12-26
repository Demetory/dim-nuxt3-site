<script setup lang="ts">
// Data
const { data } = reactive(await useAsyncData("tags", () => queryContent("blog").only(["tags"]).find()));
let tags: string[] = [];

for (const iterator of data!) {
  iterator.tags.forEach((element: string) => {
    if (tags.includes(element) === false) {
      tags.push(element);
    }
  });
}
</script>

<template>
  <section class="tags">
    <p>
      <AtomTag tag="blog" type="all" />
      <AtomTag v-for="(item, index) in tags" :key="`tag-${index}`" :tag="item" />
    </p>
  </section>
</template>

<style scoped lang="scss">
.tags {
  display: flex;
  flex: 1;
  align-items: center;
}
</style>
