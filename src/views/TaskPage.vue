<template>
  <div>
    <div class="title">Task</div>
    <task-list-item-full :taskId="taskId" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import TaskListItemFull from "../components/TaskListItemFull";

export default {
  name: "Tasks",
  components: {
    TaskListItemFull,
  },
  setup() {
    const route = useRoute();
    const taskId = route.params.id;

    return {
      taskId,
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
