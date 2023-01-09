<script lang="ts" setup>
import { formatDate } from "@utils/date";
import Avatar from "@components/Base/Avatar.vue";
import WideDashboard from "@layouts/WideDashboard.vue";
import { Plus } from "lucide-vue-next";

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
    publishedOn: "2022-11-16T04:28:54.764Z",
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
    publishedOn: "2022-10-28T04:28:54.764Z",
    author: {
      firstName: "Shivam",
      lastName: "Mishra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    title: "Multilingual support",
    shortDescription:
      "With reporting you can see how your users are interacting with your website. You can see how many users are on your website, how many are new, and how many are returning.",
    publishedOn: "2022-10-18T04:28:54.764Z",
    author: {
      firstName: "Shivam",
      lastName: "Mishra",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
];
</script>

<template>
  <WideDashboard title="Changelogs">
    <template #header-control>
      <input
        type="text"
        class="bg-gray-100 rounded-md px-4 py-1"
        placeholder="Search ⌘ + K"
      />
      <button
        class="bg-gray-999 hover:bg-gray-900 rounded-md text-white px-4 py-1 text-sm flex items-center gap-2"
      >
        <Plus class="h-4 w-4" />
        <span>New Post</span>
      </button>
    </template>
    <section>
      <div
        class="grid grid-cols-4 gap-5 py-5 uppercase text-[13px] tracking-wider font-semibold text-gray-400 px-6"
      >
        <div class="col-span-2">Title</div>
        <div class="col-span-1 text-right">Author</div>
        <div class="col-span-1 text-right">Published On</div>
      </div>
      <ul>
        <li
          v-for="post in publishedPosts"
          class="grid grid-cols-4 gap-5 py-4 border-t border-gray-200 last:border-b hover:bg-gray-100/50 px-6 cursor-pointer"
        >
          <div class="col-span-2">
            <h3 class="text-gray-800 text-lg font-medium">
              {{ post.title }}
            </h3>
            <p class="truncate text-gray-600 text-sm tracking-wide">
              {{ post.shortDescription }}
            </p>
          </div>
          <div class="col-span-1 flex items-center justify-end">
            <span class="text-sm text-gray-600 flex items-center gap-2">
              <Avatar
                :image="post.author.avatar"
                :name="post.author.firstName"
              ></Avatar>
              {{ post.author.firstName }} {{ post.author.lastName }}
            </span>
          </div>
          <div class="col-span-1 flex items-center justify-end">
            <time class="text-sm text-gray-600">
              {{ formatDate(post.publishedOn) }}
            </time>
          </div>
        </li>
      </ul>
    </section>
  </WideDashboard>
</template>
