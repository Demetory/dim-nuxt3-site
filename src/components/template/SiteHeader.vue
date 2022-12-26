<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";
import { useEventListener } from "@vueuse/core";

// Data
const route = useRoute();
const contentStore = useContentStore();
const menuIsOpened = ref(false);
const menuDisplay = ref(isMobile());

// Watchers
watch(contentStore.dimensions, () => {
  menuDisplay.value = isMobile();
});

watch(
  () => route.name,
  () => {
    if (menuIsOpened.value) {
      menuIsOpened.value = false;
    }
  }
);

// Methods
if (process.client) {
  const getKeyboardListener = useEventListener(document, "keydown", (e) => {
    if (e.key === "Escape" && menuIsOpened.value) {
      menuIsOpened.value = false;
    }
  });

  onBeforeUnmount(() => {
    getKeyboardListener();
  });
}

function isMobile() {
  contentStore.cube.size = contentStore.dimensions.width <= 640 ? 60 : 80;
  menuIsOpened.value = contentStore.dimensions.width >= 1024 ? true : false;
  return contentStore.dimensions.width <= 1024 ? "flex" : "none";
}

const openMenu = () => {
  menuIsOpened.value = !menuIsOpened.value;
};
</script>

<template>
  <header class="header">
    <div :class="['header-wrapper', `header-${menuIsOpened}`]">
      <AtomCube :params="contentStore.cube" />

      <nav class="navimain">
        <NuxtLink v-for="(link, index) in contentStore.navi" :key="`navi-${index}`" :to="link.path" class="underlined">
          {{ $t(`${link.translate}`) }}
        </NuxtLink>
        <AtomLink :params="contentStore.links.dim_github" class="underlined" />
        <AtomLink :params="contentStore.links.dim_behance" class="underlined" />
      </nav>

      <ClientOnly>
        <OrganismSwitchColor />
      </ClientOnly>

      <nav class="navihire">
        <h2 class="navihire__title">Wanna hire me? →</h2>
        <AtomFlipper v-for="flipper in contentStore.navi_contacts" :key="`flipper-${flipper.img}`" :params="flipper" />
      </nav>

      <AtomHamburger :params="{ size: 60, display: menuDisplay, isOpened: menuIsOpened }" @click.stop="openMenu" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.theme-dark {
  .page-blog .header {
    background-color: colors.$grey-dark;
  }
}

.theme-light {
  .page-blog .header {
    background-color: colors.$white;
  }
}

.header,
.header-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;

  .navimain {
    z-index: 2;
    display: flex;
    font-size: 2.2rem;

    a {
      margin-left: grid.$gap;
    }
  }

  .navihire {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    font-size: 2.2rem;

    .flip-container {
      margin-left: 1rem;
    }
  }

  .switcher {
    margin: 0 auto;
  }

  @media screen and (max-width: 1024px) {
    .navihire {
      display: none;
    }

    .header-true {
      z-index: grid.$zindex-top;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: grid.$gap;
      width: 100vw;
      height: 100vh;
      background-color: colors.$black-opacity;
      animation-name: fadeIn;
      animation-duration: 0.5s;
      animation-iteration-count: 1;

      .switcher {
        display: none;
      }

      .navimain {
        flex-direction: column;
        margin: auto 0;
        width: calc(100% - grid.$gap);

        a {
          display: inline-flex;
          margin-left: 0;
          padding: 2rem 0;
          width: 100%;
          font-size: 8rem;

          &:not(:last-of-type) {
            border-bottom: solid 1px colors.$grey-light;
          }
        }
      }

      .navihire {
        display: flex;
        margin: 0 auto;

        &__title {
          color: colors.$white;
        }
      }

      .cube {
        position: fixed;
        top: calc(grid.$gap * 2);
        left: calc(grid.$gap * 2);
      }

      .hamburger {
        position: fixed;
        top: calc(grid.$gap * 2.5);
        right: calc(grid.$gap * 2);
      }
    }
  }

  @media screen and (max-width: 800px) {
    .header-true {
      .cube {
        top: calc(grid.$gap);
        left: calc(grid.$gap);
      }

      .hamburger {
        top: calc(grid.$gap * 1.5);
        right: calc(grid.$gap);
      }
    }
  }

  @media screen and (max-width: 640px) {
    .navimain {
      display: none;
    }

    .header-true {
      .cube {
        top: calc(grid.$gap * 1.5);
      }

      .navimain {
        display: flex;
      }

      .navihire {
        &__title {
          display: none;
        }

        .flip-container:first-of-type {
          margin-left: 0;
        }
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      display: none;
    }
    100% {
      opacity: 1;
      display: flex;
    }
  }
}

.header {
  z-index: grid.$zindex-top;
  position: sticky;
  top: calc(grid.$gap * 2);

  @media screen and (max-width: 800px) {
    top: grid.$gap;
  }
}
</style>
