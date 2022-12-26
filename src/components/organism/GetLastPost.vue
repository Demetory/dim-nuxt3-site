<script setup lang="ts">
// Data
const { data } = reactive(
  await useAsyncData("post", () =>
    queryContent("blog").only(["number", "_path", "title", "subtitle"]).sort({ date: -1 }).limit(1).find()
  )
);
</script>

<template>
  <article class="whatsnew">
    <h2 class="title">New in da Blog:</h2>
    <div class="entry">
      <div class="digit">{{ `#${data![0].number}` }}</div>
      <div class="content">
        <h3 class="subtitle">
          <NuxtLink :to="data![0]._path">{{ data![0].title }}</NuxtLink>
        </h3>
        <p>{{ data![0].subtitle }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.whatsnew {
  display: flex;
  flex-direction: column;
  margin: 8rem 10rem 0;

  .title {
    margin-bottom: 1rem;
  }

  .entry {
    display: flex;
    flex-direction: row;

    .digit {
      margin-right: 1rem;
      font-size: 4.8rem;
      line-height: 4rem;
      font-weight: 900;
    }

    .subtitle {
      font-size: 2.2rem;
      margin-bottom: 0.4rem;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 11rem 4rem 0 0;
  }

  @media screen and (max-width: 480px) {
    .entry {
      flex-direction: column;

      .digit {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
