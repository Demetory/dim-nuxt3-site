<script setup lang="ts">
// Modules
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

// Props
const props = defineProps<{
  tag?: string | string[];
}>();

// Data
const query: QueryBuilderParams = {
  path: "/blog",
  only: ["number", "title", "subtitle", "tags", "date", "_path"],
  // @ts-expect-error: not exist in type
  where: { tags: { $contains: props.tag } },
  // @ts-expect-error: not exist in type
  sort: { date: -1 },
};
</script>

<template>
  <div class="bloglist">
    <ContentList :query="query">
      <template v-slot="{ list }">
        <TemplatePostCard v-for="article in list" :key="article._path" :article="article" />
      </template>

      <template #not-found>
        <h2 class="empty">Easy, Tiger.<br />Nothing was found.</h2>
      </template>
    </ContentList>
  </div>
</template>

<style scoped lang="scss">
.bloglist {
  padding-top: 9.5rem;

  .empty {
    margin-top: -1.5rem;
    font-size: 6rem;
    font-weight: 900;
    line-height: 120%;
  }
}
</style>
