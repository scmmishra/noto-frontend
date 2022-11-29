<script lang="ts" setup>
import { computed } from "vue";
import BadgeVue from "@components/Base/Badge.vue";
import type { BadgeTone } from "~types/ui";

export interface Props {
  title: string;
  link?: string;
  active?: boolean;
  disabled?: boolean;
  badgeText?: string | number | null;
  tone?: BadgeTone;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  active: false,
  hint: null,
  badgeText: null,
  tone: "neutral",
});

const state = computed(() => {
  if (props.disabled) {
    return "text-black-500 pointer-events-none";
  }
  if (props.active) {
    return "text-black-900 bg-black-100";
  }
  return "text-black-700 hover:text-black-900 hover:bg-black-100";
});
</script>

<template>
  <component
    :is="link ? 'a' : 'button'"
    :href="link"
    class="flex items-center w-full px-4 py-2 text-sm rounded-lg gap-x-3"
    :class="state"
  >
    <slot></slot>
    <span class="flex-grow py-1 leading-none text-left">{{ title }}</span>
    <BadgeVue v-if="badgeText" :tone="tone">
      {{ badgeText }}
    </BadgeVue>
  </component>
</template>
