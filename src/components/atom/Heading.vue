<script setup lang="ts">
// Types
import type { IHeading } from "@/types/IHeading";

// Props
defineProps({
  heading: {
    type: Object as () => IHeading,
    required: true,
  },
});
</script>

<template>
  <section class="heading">
    <div v-if="heading.digit" class="heading__col heading__col-digit">
      <span class="heading__line">{{ heading.digit }}</span>
    </div>
    <div class="heading__col">
      <h1 class="heading__content">
        <span v-for="(line, index) in heading.lines" :key="`line-${index}`" class="heading__line" attr="parallaxed">
          {{ line }}
        </span>
      </h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.heading {
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  margin: auto 0;

  &__col,
  &__col-digit {
    display: flex;
    flex-direction: column;
  }

  &__col-digit {
    .heading__line {
      margin-top: -0.4vw;
      font-size: 24vw;
      line-height: 21vw;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__line {
    text-transform: uppercase;
    font-size: 8vw;
    font-weight: 900;
    letter-spacing: -5px;
    line-height: 6.5vw;
    user-select: none;
    transition: all 0.05s ease-in-out;

    -webkit-text-fill-color: transparent;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;

    &__line {
      font-size: 12vw;
      line-height: 11vw;
    }
  }
}

.theme-dark .heading {
  &__line {
    background: -webkit-gradient(linear, left top, left bottom, from(colors.$black), to(colors.$font-grey));
    background: linear-gradient(colors.$black, colors.$font-grey);
    background-clip: text;
    -webkit-background-clip: text;
  }
}

.theme-light .heading {
  &__line {
    background: -webkit-gradient(linear, left top, left bottom, from(colors.$font-heading-from), to(colors.$black));
    background: linear-gradient(colors.$font-heading-from, colors.$black);
    background-clip: text;
    -webkit-background-clip: text;
  }
}
</style>
