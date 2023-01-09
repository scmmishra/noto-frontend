<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <main class="grid space-y-6 py-8">
    <section class="space-y-2 px-6 flex items-center justify-between">
      <h1 class="text-2xl leading-8 text-gray-999 font-extrabold">
        {{ title }}
      </h1>
    </section>
    <section>
      <slot> </slot>
    </section>
  </main>
</template>
