import { createRouter, createWebHistory } from "vue-router";
import Tasks from "../views/Tasks.vue";

const routes = [
  {
    path: "/",
    name: "AllTasks",
    component: Tasks,
  },
  {
    path: "/:completed",
    name: "CompletedTasks",
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
