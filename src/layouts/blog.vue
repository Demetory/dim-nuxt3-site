<template>
  <main>
    <TemplateBlogAside />
    <slot />
  </main>
</template>

<style scoped lang="scss">
main {
  flex-direction: row;
  margin-bottom: 2rem;
}
</style>
