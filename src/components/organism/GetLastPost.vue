<script setup lang="ts">
// Data
const query = await queryContent("blog")
  .only(["number", "_path", "title", "subtitle"])
  .sort({ date: -1 })
  .limit(1)
  .find();
const article = query[0];
</script>

<template>
  <article class="whatsnew">
    <h2 class="title">New in da Blog:</h2>
    <div class="entry">
      <div class="digit">{{ `#${article.number}` }}</div>
      <div class="content">
        <h3 class="subtitle">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        </h3>
        <p>{{ article.subtitle }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.whatsnew {
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin: 8rem 11rem 0;

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
