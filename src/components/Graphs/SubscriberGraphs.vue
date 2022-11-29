<script lang="ts" setup>
import { formatDate, subtractDate } from "@/utils/date";
import { ref, onMounted } from "vue";

// generate an array of random numbers
let subscriptions = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 100)
);

const maxHeight = ref("0px");
const maxValue = Math.max(...subscriptions);

onMounted(() => {
  setTimeout(() => {
    maxHeight.value = `500px`;
  }, 100);
});

function getHeight(value: number) {
  return (value / maxValue) * 200;
}
function getDuration(value: number) {
  return (value / maxValue) * 100 + 200;
}
</script>

<template>
  <div class="grid grid-cols-[repeat(30,_minmax(0,_1fr))] px-6 h-60">
    <div
      v-for="count in subscriptions"
      class="border-dotted border-r first:border-l border-black-200 flex items-end justify-center hover:bg-black-100"
    >
      <div
        :style="{
          height: `${getHeight(count)}px`,
          maxHeight,
          transitionDuration: `${getDuration(count)}ms`,
        }"
        class="w-2 rounded-full bg-pink-500 my-2 transition-[max-height] ease-in-out"
      ></div>
    </div>
  </div>
  <div class="grid grid-cols-2 text-xs text-black-600 px-6 mt-2">
    <time>{{ formatDate(subtractDate(30)) }}</time>
    <time class="text-right">{{ formatDate() }}</time>
  </div>
</template>
