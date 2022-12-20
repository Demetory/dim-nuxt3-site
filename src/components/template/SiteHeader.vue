<template>
  <header class="header">
    <AtomCube />
    <MoleculeNaviMain />
    <ClientOnly>
      <OrganismSwitchColor />
    </ClientOnly>
    <MoleculeNaviHire />
    <AtomHamburger />
  </header>
</template>

<style scoped lang="scss">
.header {
  z-index: calc(grid.$zindex-top - 100);
  top: grid.$gap;
  position: sticky;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  align-items: center;
  padding: grid.$gap;
  transition: all grid.$transition;
  user-select: none;

  &__switchers {
    display: flex;
    flex-direction: row;

    .select:first-child {
      margin-right: 2rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .navihire {
    display: none;
  }
  .mainnavi {
    :deep(a:not(:first-of-type)) {
      display: none;
    }
  }
}

@media screen and (max-width: 800px) {
  .header {
    top: calc(grid.$gap / 2);
  }
}

@media screen and (max-width: 640px) {
  .mainnavi {
    display: none;
  }
  .hamburger {
    order: 1;
    margin-left: 0;
  }
  .switcher {
    order: 2;
  }
}

.mode-dark {
  .page:not(.page-index) {
    .header {
      background-color: colors.$bg-body-dark;
    }
  }
}

.mode-light {
  .page:not(.page-index) {
    .header {
      background-color: colors.$bg-body-light;
    }
  }
}
</style>
