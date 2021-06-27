<template>
  <div class="container">
    <header>
      <Link path="/" title="Back" />
      <div class="task-id-container">
        {{ taskId }}
      </div>
    </header>
    <task-list-item-card :task-id="taskId" />
  </div>
</template>

<script>
import TaskListItemCard from "./TaskListItemCard";
import Link from "./Link";

export default {
  name: "TaskListItemFull",
  components: { Link, TaskListItemCard },
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
}

.container {
  margin: 2rem auto;
  width: calc(100% / 3);
}

.task-id-container {
  margin-right: 1rem;
}
</style>
