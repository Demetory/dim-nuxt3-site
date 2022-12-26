<template>
  <aside class="aside">
    <div class="aside-wrapper">
      <section class="aside__search">
        <p><input type="text" value="Everybody looking for something" /></p>
      </section>
      <OrganismGetTags />
      <section class="aside__warning">
        <p>Sry.</p>
        <p>Currently available in russian only.</p>
      </section>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 400px;

  &-wrapper {
    position: sticky;
    top: 20rem;
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    height: calc(100vh - (20rem + 7.5rem));
  }

  &__search {
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

  &__warning {
    margin-top: auto;

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

.theme-dark .aside input {
  color: colors.$white;
}

.theme-light .aside input {
  color: colors.$black;
}
</style>
