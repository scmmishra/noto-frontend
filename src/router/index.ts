import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@pages/Dashboard.vue";
import Subscribers from "@pages/Subscribers.vue";
import EditChangelog from "@/pages/EditChangelog.vue";
import NewChangeLog from "@/pages/NewChangeLog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Dashboard },
    { path: "/changelog/new", name: "new-log", component: NewChangeLog },
    { path: "/changelog/:id", name: "edit-log", component: EditChangelog },
    { path: "/subscribers", name: "subscribers", component: Subscribers },
  ],
});

export default router;
