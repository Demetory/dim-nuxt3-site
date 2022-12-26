<script setup lang="ts">
// Modules
import { useI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import { useContentStore } from "@/store/contentStore";

// Data
const { availableLocales, locale } = useI18n();
const contentStore = useContentStore();
const options = availableLocales;
const model = useStorage("language", locale);
contentStore.language = model;

const data = {
  id: "lang",
  modelValue: model,
  options: options,
  label: "common.siteSwitcher.lang.title",
};
</script>

<template>
  <AtomSelect :params="data" v-model="model" />
</template>
