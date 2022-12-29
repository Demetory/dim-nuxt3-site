<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useContentStore } from "@/store/contentStore";
import { useEventListener } from "@vueuse/core";

// Data
const { locale, t } = useI18n();
const contentStore = useContentStore();
const route = useRoute();
const siteTitle = t("common.siteTitle");
const slogans = contentStore.slogan;

// Computed Properties
const getSiteTitle = computed(() => {
  const translate = route.meta.title ? t(`${route.meta.title}`) : null;
  const result = translate ? `${siteTitle} | ${translate}` : siteTitle;
  return result;
});

const getTheme = computed(() => {
  return contentStore.isDark ? "theme-dark" : "theme-light";
});

// Methods
InitApp();

useHead({ title: getSiteTitle });

const getDimension = () => {
  contentStore.dimensions.width = window.innerWidth;
  contentStore.dimensions.height = window.innerHeight;
};

if (process.client) {
  getDimension();
  const getDimensionResize = useEventListener(window, "resize", getDimension);

  onBeforeUnmount(() => {
    getDimensionResize();
  });
}
</script>

<template>
  <Html :lang="locale" :class="getTheme" attr="loading">
    <Body>
      <NoScript>
        <section class="noscript">
          <img alt="Demetory - Fatal Error" src="/images/fatality.svg" />
          <div>
            <h1>Easy, Tiger</h1>
            <p>Turn JavaScript on, dont be so paraniod.</p>
          </div>
        </section>
      </NoScript>

      <NuxtLoadingIndicator />

      <div :class="['page', `page-${String($route.name)}`]" v-on:mousemove="calculateDelta">
        <AtomKreuz />
        <AtomSlogan :params="{ slogans: slogans, delay: 30000 }" />

        <TemplateSiteHeader />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
        <TemplateSiteFooter />
      </div>
    </Body>
  </Html>
</template>

<style lang="scss">
html,
body {
  &::before,
  &::after {
    z-index: calc(grid.$zindex-top + 100);
    position: fixed;
    content: "";
  }
}

html {
  &::before,
  &::after {
    top: 0;
    width: 50vw;
    height: 100vh;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }

  &.theme-dark {
    &::before,
    &::after {
      background-color: colors.$black;
    }

    body {
      color: colors.$grey-light;
      background-color: colors.$grey-dark;

      &::before,
      &::after {
        background-color: colors.$black;
      }
    }
  }

  &.theme-light {
    &::before,
    &::after {
      background-color: colors.$grey-light;
    }

    body {
      color: colors.$grey-dark;
      background-color: colors.$white;

      &::before,
      &::after {
        background-color: colors.$grey-light;
      }
    }
  }

  &[attr="loading"] {
    &::before,
    &::after {
      animation-name: loading-wide;
    }

    @media screen and (max-width: 800px) {
      &::before,
      &::after {
        animation-name: loading-thin;
      }
    }
  }

  @keyframes loading-wide {
    0% {
      width: 50vw;
    }
    100% {
      width: grid.$gap;
    }
  }

  @keyframes loading-thin {
    0% {
      width: 50vw;
    }
    100% {
      width: calc(grid.$gap / 2);
    }
  }
}

body {
  padding: grid.$gap;
  font-family: "Inter", sans-serif;
  overflow-y: scroll;
  overflow-x: hidden;

  &::before,
  &::after {
    left: 0;
    width: 100vw;
    height: grid.$gap;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }

  @media screen and (max-width: 800px) {
    padding: calc(grid.$gap / 2);

    &::before,
    &::after {
      height: calc(grid.$gap / 2);
    }
  }
}

main,
.page,
.page-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

main {
  padding: 0 grid.$gap;

  @media screen and (max-width: 800px) {
    padding: 0 calc(grid.$gap / 2);
  }
}
</style>
