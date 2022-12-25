<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const dateTZ = ref(useDateTZ(new Date(), "Asia/Jakarta"));
const dateHour = ref(String(dateTZ.value.getHours()).padStart(2, "0"));
const dateMinute = ref(String(dateTZ.value.getMinutes()).padStart(2, "0"));
const dateClock = ref(String(`${dateHour.value}:${dateMinute.value}`));
const intervalTimerID = setInterval(updateTime, 1000);

// Computed Properties
const getContactState = computed(() => {
  return parseInt(dateHour.value) >= 10 && parseInt(dateHour.value) <= 23
    ? { text: contentStore.footer_contact_msg.true, state: true }
    : { text: contentStore.footer_contact_msg.false, state: false };
});

// Methods
onBeforeUnmount(() => {
  clearInterval(intervalTimerID);
});

function updateTime() {
  dateTZ.value = useDateTZ(new Date(), "Asia/Jakarta");
  dateHour.value = String(dateTZ.value.getHours()).padStart(2, "0");
  dateMinute.value = String(dateTZ.value.getMinutes()).padStart(2, "0");
  dateClock.value = String(`${dateHour.value}:${dateMinute.value}`);
}
</script>

<template>
  <footer class="footer">
    <div class="footer__col">
      <p>
        It's {{ dateClock }} by me.
        <AtomLink v-if="getContactState.state" :params="{ text: getContactState.text, url: 'https://t.me/Demetory' }" />
        <template v-else>{{ getContactState.text }}</template>
      </p>
    </div>
    <div class="footer__col">
      <p>
        <AtomLink :params="contentStore.links.dim_shop" />
        {{ getYear() }} &copy; Demetory
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  user-select: none;

  p {
    display: flex;
    align-items: center;
  }

  &__col:first-of-type {
    a {
      margin-left: 0.4rem;
    }
  }

  &__col:last-of-type {
    margin-left: auto;

    a {
      margin-right: grid.$gap;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    &__col:last-of-type {
      margin-top: 1.6rem;
      margin-left: 0;

      a {
        margin-left: auto;
        margin-right: 0;
        order: 2;
      }
    }
  }
}
</style>
