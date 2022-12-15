<script setup lang="ts">
// Modules
import { useContentStore } from "@/store/contentStore";

// Data
const contentStore = useContentStore();
const daytimeMsg = contentStore.footer_contact_msg;
const intervalTimerID = setInterval(updateTime, 1000);

const dateTZ = ref(new Date());
const dateHour = ref(dateTZ.value.getHours());
const dateClock = ref(new String(dateTZ.value.getHours() + ":" + dateTZ.value.getMinutes()));

// Computed Properties
const getContactState = computed(() => {
  return dateHour.value >= 10 && dateHour.value <= 23 ? daytimeMsg.true : daytimeMsg.false;
});

// Methods
function updateTime() {
  dateTZ.value = useDateTZ(new Date(), "Asia/Jakarta");

  let hour: string | number = dateTZ.value.getHours();
  let minute: string | number = dateTZ.value.getMinutes();

  dateHour.value = hour;

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  dateClock.value = `${hour}:${minute}`;
}

// Hooks
onBeforeUnmount(() => {
  clearInterval(intervalTimerID);
});
</script>

<template>
  <p>
    <span>It's {{ dateClock }} by me.</span>
    <span>{{ getContactState }}</span>
  </p>
</template>

<style scoped lang="scss">
p {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
span:not(:first-of-type) {
  margin-left: 0.4rem;
}
</style>
