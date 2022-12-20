<script setup lang="ts">
// Modules
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

// Data
const route = useRoute();

// Data
const query: QueryBuilderParams = {
  path: "/blog",
  only: ["number", "title", "subtitle", "tags", "date", "_path"],
  // @ts-expect-error: not exist in type
  where: { tags: { $contains: route.params.slug } },
  // @ts-expect-error: not exist in type
  sort: { date: -1 },
};
</script>

<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <TemplatePostCard v-for="article in list" :key="article._path" :article="article" />
    </template>

    <template #not-found>
      <p class="empty">No articles found.</p>
    </template>
  </ContentList>
</template>
