<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <main class="grid space-y-6 py-8">
    <section
      v-if="title"
      class="px-6 grid grid-cols-1 md:grid-cols-[300px_1fr]"
    >
      <div class="flex items-center">
        <h1 class="text-2xl leading-8 text-gray-999 font-extrabold">
          {{ title }}
        </h1>
      </div>
      <div class="flex justify-end gap-2">
        <slot name="header-control"></slot>
      </div>
    </section>
    <section>
      <slot> </slot>
    </section>
  </main>
</template>
