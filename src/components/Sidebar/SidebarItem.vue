<script lang="ts" setup>
import { computed } from "vue";
import BadgeVue from "@components/Base/Badge.vue";
import type { BadgeTone } from "~types/ui";
import { RouterLink } from "vue-router";

export interface Props {
  as?: string;
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

const buttonType = computed(() => {
  if (props.as) return props.as;
  if (props.link) {
    return props.link.startsWith("http") ? "a" : RouterLink;
  }
  return "button";
});

const state = computed(() => {
  if (props.disabled) {
    return "text-gray-500 pointer-events-none";
  }
  if (props.active) {
    return "text-gray-900 bg-gray-100";
  }
  return "text-gray-700 hover:text-gray-900 hover:bg-gray-100";
});
</script>

<template>
  <component
    :is="buttonType"
    :href="link"
    :to="link"
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
