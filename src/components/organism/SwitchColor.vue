<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const html = ref<HTMLHtmlElement>();
const storage = ref(localStorage.getItem("isDark"));

// Callbax
initData();

// Methods
function initData() {
  html.value = document.getElementsByTagName("html")[0];

  if (!storage.value) {
    localStorage.setItem("isDark", "true");
    contentStore.isDark = true;
  }

  setMode();
}

function setMode() {
  const isTrue = localStorage.getItem("isDark") === "true";
  contentStore.isDark = isTrue;
  const colorMode = contentStore.isDark ? "mode-dark" : "mode-light";
  html.value!.className = "";
  html.value!.classList.add(colorMode);
}

function switchMode() {
  contentStore.isDark = !contentStore.isDark;
  localStorage.setItem("isDark", String(contentStore.isDark));
  setMode();
}
</script>

<template>
  <section class="switcher switcher-color" @click.stop="switchMode()">
    <h2>switch to</h2>
    <button class="btn btn-switch">
      <img v-if="contentStore.isDark" alt="Light Mode" src="@/assets/images/switch-light.svg" />
      <img v-else alt="Dark Mode" src="@/assets/images/switch-dark.svg" />
    </button>
  </section>
</template>

<style scoped lang="scss">
.switcher-color {
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;

  h2 {
    margin-right: 0.8rem;
    font-size: 1.8rem;
    font-weight: 400;
    user-select: none;
  }

  .btn-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;

    img {
      display: flex;
    }
  }

  @media screen and (max-width: 1280px) {
    h2 {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    h2 {
      display: flex;
    }
  }
}
</style>
