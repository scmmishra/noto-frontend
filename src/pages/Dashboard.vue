<script lang="ts" setup>
import { formatDate } from "../utils/date";

const publishedPosts = [
  {
    title: "A better date picker",
    shortDescription:
      "This release brings one of the most requested (some might say obvious) features to Splitbee: A date range picker.",
    publishedOn: "2022-11-29T04:28:54.764Z",
    author: {
      firstName: "Shivam",
      lastName: "Mishra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    title: "Audience feedback & Analytics",
    shortDescription:
      "Audience feedback is one of the most requested features on Splitbee. We are excited to announce that we are working on it.",
    publishedOn: "2022-11-29T04:28:54.764Z",
    author: {
      firstName: "Shivam",
      lastName: "Mishra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    title: "Better reportings and visualizations",
    shortDescription:
      "With reporting you can see how your users are interacting with your website. You can see how many users are on your website, how many are new, and how many are returning.",
    publishedOn: "2022-11-29T04:28:54.764Z",
    author: {
      firstName: "Shivam",
      lastName: "Mishra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
];
</script>

<template>
  <main class="grid space-y-6 py-8">
    <section class="space-y-2 px-6">
      <h1 class="text-2xl leading-8 text-black-999 font-extrabold">
        Changelogs
      </h1>
    </section>
    <section>
      <div
        class="grid grid-cols-4 gap-5 py-5 uppercase text-xs tracking-wider font-semibold text-black-400 px-6"
      >
        <div class="col-span-2">Title</div>
        <div class="col-span-1 text-right">Author</div>
        <div class="col-span-1 text-right">Published On</div>
      </div>
      <div
        v-for="post in publishedPosts"
        class="grid grid-cols-4 gap-5 py-4 first:pt-0 border-t border-black-200 last:border-b hover:bg-black-100/50 px-6"
      >
        <div class="col-span-2">
          <h3 class="text-black-800 text-lg font-semibold">
            {{ post.title }}
          </h3>
          <p class="truncate text-black-600">
            {{ post.shortDescription }}
          </p>
        </div>
        <div class="col-span-1 flex items-center justify-end">
          <span class="text-base text-black-600">
            {{ post.author.firstName }} {{ post.author.lastName }}
          </span>
        </div>
        <div class="col-span-1 flex items-center justify-end">
          <time class="text-base text-black-600">
            {{ formatDate(post.publishedOn) }}
          </time>
        </div>
      </div>
    </section>
  </main>
</template>
