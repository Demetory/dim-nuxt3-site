// Core
import { ref } from "vue";
import { defineStore } from "pinia";

// Static content
import * as staticData from "@/content/staticContent.json";

// Store
const useContentStore = defineStore("contentStore", () => {
  // State
  const navi = staticData.navi;
  const navi_contacts = staticData.navi_contact;
  const links = staticData.links;
  const footer_contact_msg = staticData.footer_contact_msg;
  const slogan = staticData.slogan;
  const isDark = ref(true);

  return { navi, navi_contacts, links, footer_contact_msg, slogan, isDark };
});

// Export
export { useContentStore };

