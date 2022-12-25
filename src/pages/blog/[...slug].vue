<script setup lang="ts">
// Data
const route = useRoute();
const path = route.path.replace(/\/+$/, "");

const article = await queryContent("blog").where({ _path: path }).findOne();
const [prev, next] = await queryContent("blog").only(["_path", "title"]).sort({ date: 1 }).findSurround(path);

// Methods
definePageMeta({
  layout: "blog",
});

useHead({
  title: article.title,
  meta: [{ name: "description", content: "NuxtContent Starter Template" }],
});
</script>

<template>
  <section class="entry">
    <header class="entry__head">
      <h1 class="entry__title">{{ article.title }}</h1>
    </header>
    <article class="entry__body">
      <ContentRenderer :value="article">
        <ContentRendererMarkdown :value="article" />
        <ContentSlot :value="article" />
        <template #empty>
          <p class="empty">No post found.</p>
        </template>
      </ContentRenderer>
    </article>
    <footer class="entry__foot">
      <span v-if="prev" class="prev">
        &larr; <NuxtLink :to="prev._path">{{ prev.title }}</NuxtLink>
      </span>
      <span v-if="next" class="next">
        <NuxtLink :to="next._path">{{ next.title }}</NuxtLink> &rarr;
      </span>
    </footer>
  </section>
</template>
