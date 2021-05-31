<template>
  <div class="logo">Simple TODO app</div>
  <create-task />

  <task-list />
</template>

<script>
import CreateTask from "./components/CreateTask.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    CreateTask,
    TaskList,
  },
};
</script>

<style scoped>
.logo {
  font-size: 36px;
  margin-bottom: 2rem;
}
</style>
