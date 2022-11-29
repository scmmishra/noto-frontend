<script lang="ts" setup>
import Avatar from "../Base/Avatar.vue";
import {
  MailCheck,
  Settings,
  FileText,
  Archive,
  Edit3,
  FlaskConical,
} from "lucide-vue-next";

import SidebarItem from "./SidebarItem.vue";
import SidebarGroup from "./SidebarGroup.vue";

const orgName = "Chatwoot";
</script>

<template>
  <div
    class="bg-white h-screen p-3 pt-5 flex flex-col drop-shadow-sm border-r border-black-100"
  >
    <div class="flex justify-between items-center p-2">
      <button
        class="flex gap-x-2 items-center hover:bg-gray-100 p-1 rounded-lg"
      >
        <div
          class="rounded-lg bg-gradient-to-t from-blue-600 to-blue-400 w-6 h-6"
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
          <SidebarItem title="Published" badge-text="70">
            <FileText class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem title="Drafts">
            <Edit3 class="h-4 w-4" />
          </SidebarItem>
          <SidebarItem title="Subscribers">
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
