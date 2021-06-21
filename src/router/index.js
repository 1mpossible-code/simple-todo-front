import { createRouter, createWebHistory } from "vue-router";
import Tasks from "../views/Tasks.vue";
import TaskPage from "../views/TaskPage.vue";

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
  {
    path: "/task/:id",
    name: "TaskPage",
    component: TaskPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
