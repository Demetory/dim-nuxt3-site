<template>
  <aside class="blog__aside">
    <div class="blog__aside-wrapper">
      <section class="search">
        <p class="input"><input type="text" value="Everybody looking for something" /></p>
      </section>
      <OrganismGetTags />
      <section class="warning">
        <p>Sry.</p>
        <p>Currently available in russian only.</p>
      </section>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.blog__aside {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  width: 400px;

  &-wrapper {
    position: sticky;
    top: 23.5rem;
    display: flex;
    flex-direction: column;
    height: 64vh;
  }

  .search {
    display: flex;
    flex-direction: column;

    input {
      display: inline-flex;
      padding: 1rem 1.6rem;
      width: calc(100% - 3.2rem);
      border: solid 1px colors.$green;
      color: colors.$white;
      background-color: transparent;
    }
  }

  .warning {
    margin-bottom: 0rem;

    p:first-of-type {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    p:last-of-type {
      font-size: 1.8rem;
      font-weight: 400;
      color: colors.$warning;
    }
  }
}

.mode-dark .blog input {
  color: colors.$white;
}

.mode-light .blog input {
  color: colors.$black;
}
</style>
