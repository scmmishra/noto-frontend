<script lang="ts" setup>
import Avatar from "@components/Base/Avatar.vue";
import {
  MailCheck,
  Settings,
  FileText,
  Edit3,
  FlaskConical,
} from "lucide-vue-next";

import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const orgName = "Chatwoot";
</script>

<template>
  <div
    class="bg-white h-screen p-3 pt-5 flex flex-col drop-shadow-sm border-r border-gray-100"
  >
    <div class="flex justify-between items-center p-2">
      <button
        class="flex gap-x-2 items-center hover:bg-gray-100 p-1 rounded-lg"
      >
        <div
          class="rounded-lg bg-gradient-to-tr from-blue-400 to-pink-400 w-6 h-6"
        ></div>
        <span class="font-normal text-sm leading-none">{{ orgName }}</span>
      </button>
      <Avatar
        image="https://randomuser.me/api/portraits/men/1.jpg"
        name="Shivam Mishra"
        has-badge
        class="m-1"
      ></Avatar>
    </div>
    <div
      class="space-y-8 flex-grow overflow-y-auto py-5 flex flex-col justify-between"
    >
      <div class="space-y-8">
        <SidebarGroup title="Changelogs">
          <SidebarItem
            link="/"
            title="Published"
            badge-text="70"
            :active="route.name === 'home'"
          >
            <FileText class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem
            link="/drafts"
            title="Drafts"
            :active="route.name === 'drafts'"
          >
            <Edit3 class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem
            link="/subscribers"
            title="Subscribers"
            :active="route.name === 'subscribers'"
          >
            <MailCheck class="h-4 w-4" />
          </SidebarItem>
        </SidebarGroup>

        <SidebarGroup title="Labels">
          <SidebarItem title="Ideas">
            <span class="h-2 w-2 bg-green-500 rounded-full mx-1"></span>
          </SidebarItem>
          <SidebarItem title="Improvements">
            <span class="h-2 w-2 bg-blue-500 rounded-full mx-1"></span>
          </SidebarItem>
          <SidebarItem title="Fixed">
            <span class="h-2 w-2 bg-red-500 rounded-full mx-1"></span>
          </SidebarItem>
        </SidebarGroup>
      </div>
      <SidebarGroup>
        <SidebarItem title="Settings" link="/settings">
          <Settings class="h-4 w-4" />
        </SidebarItem>
        <SidebarItem title="Feedback" hint="Beta">
          <FlaskConical class="h-4 w-4" />
        </SidebarItem>
      </SidebarGroup>
    </div>
  </div>
</template>
