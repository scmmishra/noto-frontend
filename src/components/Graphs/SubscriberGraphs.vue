<script lang="ts" setup>
import { formatDate, subtractDate } from "@/utils/date";

// generate an array of random numbers
const subscriptions = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 100)
);

const maxValue = Math.max(...subscriptions);

function getHeight(value: number) {
  return (value / maxValue) * 200;
}
</script>

<template>
  <div class="grid grid-cols-[repeat(30,_minmax(0,_1fr))] px-6 h-60">
    <div
      v-for="count in subscriptions"
      class="border-dashed border-r first:border-l border-black-200 flex items-end justify-center hover:bg-black-100"
    >
      <div
        :style="{ height: `${getHeight(count)}px` }"
        class="w-2 rounded-full bg-blue-500 my-2 transition-all duration-1000 h-0"
      ></div>
    </div>
  </div>
  <div class="grid grid-cols-2 text-xs text-black-600 px-6">
    <time>{{ formatDate(subtractDate(30)) }}</time>
    <time class="text-right">{{ formatDate() }}</time>
  </div>
</template>
