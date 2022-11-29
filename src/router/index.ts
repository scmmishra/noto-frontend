import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@pages/Dashboard.vue";
import Subscribers from "@pages/Subscribers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Dashboard },
    { path: "/subscribers", name: "subscribers", component: Subscribers },
  ],
});

export default router;
