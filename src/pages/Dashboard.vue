<script lang="ts" setup>
import { formatDate } from "../utils/date";
</script>

<template>
  <main class="grid py-8 pr-4 space-y-6">
    <section class="ml-2 space-y-2">
      <h1 class="font-normal text-[20px] leading-8 text-black-999">
        Changelogs
      </h1>
      <time class="text-sm text-black-600">{{ formatDate() }}</time>
    </section>
    <Section class="p-6"> </Section>
  </main>
</template>
