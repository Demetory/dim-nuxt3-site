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
  <Html :lang="locale" :class="getTheme">
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
body {
  padding: grid.$gap;
  font-family: "Inter", sans-serif;
  overflow-y: scroll;

  #__nuxt,
  .page,
  .page-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    transition: color grid.$transition, background-color grid.$transition;
  }

  .page {
    padding: grid.$gap;
  }

  @media screen and (max-width: 800px) {
    padding: calc(grid.$gap / 2);

    .page {
      padding: calc(grid.$gap / 2);
    }
  }
}

.theme-dark {
  background-color: colors.$black;

  .page {
    background-color: colors.$grey-dark;
    color: colors.$grey-light;
  }
}

.theme-light {
  background-color: colors.$grey-light;

  .page {
    background-color: colors.$white;
    color: colors.$grey-dark;
  }
}
</style>
