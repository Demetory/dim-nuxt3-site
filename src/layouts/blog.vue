<template>
  <main class="page-container">
    <div class="page-wrapper blog">
      <TemplateBlogAside />
      <section class="blog__list">
        <slot />
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.blog {
  flex-direction: row;

  &__list {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: 8rem;
    margin-left: calc(grid.$gap * 2);
    padding-top: 10vh;
  }
}
</style>
