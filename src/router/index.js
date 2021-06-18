import { createRouter, createWebHistory } from "vue-router";
import Tasks from "../views/Tasks.vue";

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks,
    children: [
      {
        path: "/:completed",
        name: "CompletedTasks",
        component: Tasks,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
