<template>
  <header class="header">
    <AtomCube />
    <MoleculeNaviMain />
    <ClientOnly>
      <OrganismSwitchColor />
    </ClientOnly>
    <MoleculeNaviHire />
  </header>
</template>

<style scoped lang="scss">
.header {
  z-index: calc(grid.$zindex-top - 100);
  position: sticky;
  top: grid.$gap;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  align-items: center;
  margin-bottom: grid.$gap;

  &__switchers {
    display: flex;
    flex-direction: row;

    .select:first-child {
      margin-right: 2rem;
    }
  }
}

.mode-dark {
  .header {
    background-color: colors.$bg-dark;
  }
}

.mode-light {
  .header {
    background-color: colors.$bg-light;
  }
}
</style>
