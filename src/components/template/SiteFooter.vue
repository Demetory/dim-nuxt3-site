<template>
  <footer class="footer">
    <div class="footer__col">
      <ClientOnly>
        <OrganismGetTime />
      </ClientOnly>
    </div>
    <div class="footer__col">
      <OrganismGetYear />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  margin-top: grid.$gap;

  &__col {
    display: flex;
    flex: 0 1 auto;

    &:last-of-type {
      margin-left: auto;
    }
  }
}
</style>
