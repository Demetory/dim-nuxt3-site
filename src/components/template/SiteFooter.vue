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
  padding: grid.$gap;
  user-select: none;

  &__col {
    display: flex;
    flex: 0 1 auto;

    &:last-of-type {
      margin-left: auto;
    }
  }

  @media screen and (max-width: 800px) {
    .footer__col {
      p {
        flex-direction: column;

        :deep(span) {
          margin-left: 0;
          &:first-of-type {
            margin-bottom: 0.6rem;
          }
        }
      }

      &:first-of-type p {
        align-items: flex-start;
      }
      &:last-of-type p {
        align-items: flex-end;
      }
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    .footer__col {
      p {
        flex-direction: row;

        :deep(span) {
          &:first-of-type {
            margin-bottom: 0;
          }
        }
      }

      &:last-of-type {
        margin-top: 1rem;
        margin-left: 0;
        align-items: flex-start;

        p {
          display: flex;
          flex: 1;
          :deep(span:first-of-type) {
            order: 2;
            margin-left: auto;
          }
          :deep(span:last-of-type) {
            order: 1;
          }
        }
      }
    }
  }
}
</style>
