<template>
  <div>
    <create-task />
    <task-list />
  </div>
</template>

<script>
import CreateTask from "../components/CreateTask.vue";
import TaskList from "../components/TaskList.vue";

export default {
  name: "Home",
  components: {
    CreateTask,
    TaskList,
  },
};
</script>
