<script setup lang="ts">
// Types
import type IPostCard from "@/types/IPostCard";

// Props
const props = defineProps({
  article: {
    type: Object as () => IPostCard,
    required: true,
  },
});

// Computed Properties
const getDate = computed(() => {
  const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateArray = props.article.date.split("-");
  const month = monthes[parseInt(dateArray[1]) - 1];
  const day = parseInt(dateArray[2]);
  const ending = getNth(day);

  return `${month}, ${day + ending}`;
});

// Methods
</script>

<template>
  <article class="entry">
    <div class="entry__info">
      <p class="date">{{ getDate }}</p>
      <p class="tags">
        <NuxtLink v-for="(tag, index) in article.tags" :key="`tag-${index}`" :to="`/blog/tags/${tag}`">
          {{ tag }}
        </NuxtLink>
      </p>
    </div>
    <div class="entry__content">
      <div class="index">{{ `#${article.number}` }}</div>
      <div class="heading">
        <h2 class="title">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h2>
        <p class="excerpt">{{ article.subtitle }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.entry {
  display: flex;
  flex-direction: row;
  width: calc(100% - (grid.$gap * 4));

  &:not(:last-of-type) {
    margin-bottom: calc(grid.$gap * 4);
    padding-bottom: calc(grid.$gap * 4);
    border-bottom: solid 1px #666;
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 200px;

    .date {
      margin-top: 0.2rem;
      text-transform: uppercase;
      font-size: 1.8rem;
      font-weight: 400;
    }

    .tags {
      margin-top: auto;

      a:not(:last-of-type) {
        margin-right: 2rem;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    flex: 1;

    .index {
      margin-right: 1rem;
      font-size: 8rem;
      line-height: 6rem;
      font-weight: 900;
    }

    .heading {
      .title {
        font-size: 3.2rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
      }

      .excerpt {
        margin-left: 0.4rem;
        font-size: 1.8rem;
        font-weight: 400;
      }
    }
  }
}
</style>
