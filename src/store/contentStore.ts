// Core
import { ref } from "vue";
import { defineStore } from "pinia";

// Static content
import * as staticData from "~~/src/store/staticContent.json";

// Store
const useContentStore = defineStore("contentStore", () => {
  // State
  const navi = staticData.navi;
  const navi_contacts = staticData.navi_contact;
  const links = staticData.links;
  const footer_contact_msg = staticData.footer_contact_msg;
  const cube = staticData.cube;
  const slogan = staticData.slogan;
  const heading = staticData.heading;
  const isDark = ref(true);
  const dimensions = ref({ width: 0, height: 0 });
  const language = ref({});

  return { navi, navi_contacts, links, footer_contact_msg, cube, slogan, heading, isDark, dimensions, language };
});

// Export
export { useContentStore };

