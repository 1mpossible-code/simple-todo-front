<template>
  <div>
    <create-task />

    <div class="title">Tasks</div>

    <div>
      <router-link to="/">All</router-link>
      <router-link to="/completed">Completed</router-link>
      <router-link to="/uncompleted">Uncompleted</router-link>
    </div>

    <task-list :completed="completed" />
  </div>
</template>

<script>
import CreateTask from "../components/CreateTask.vue";
import TaskList from "../components/TaskList.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tasks",
  components: {
    CreateTask,
    TaskList,
  },
  setup() {
    const router = useRoute();
    console.log(router);
    let completed = computed(() => {
      if (router.params.completed === "completed") return true;
      else if (router.params.completed === "uncompleted") return false;
      return null;
    });

    return {
      completed,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  margin-top: 1rem;
  padding-bottom: 1rem;
}
</style>
