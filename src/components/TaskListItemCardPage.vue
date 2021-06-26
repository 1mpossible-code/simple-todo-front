<template>
  <div class="container">
    <header>
      <div class="back-link-container">
        <router-link to="/" class="back-link">Back</router-link>
      </div>
      <div class="task-id-container">
        {{ taskId }}
      </div>
    </header>
    <task-list-item-card :task-id="taskId" />
  </div>
</template>

<script>
import TaskListItemCard from "./TaskListItemCard";

export default {
  name: "TaskListItemFull",
  components: { TaskListItemCard },
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

.back-link-container {
  width: 30%;
}

.task-id-container {
  margin-right: 1rem;
}

.back-link {
  width: 100%;
  height: 2rem;
  border: 1px solid silver;
  border-radius: 15px;
  background-color: darkcyan;
  transition: 0.3s;
  float: left;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: #dddddd;
}

.back-link:hover {
  filter: brightness(110%);
  transform: scale(1.1);
}
</style>
