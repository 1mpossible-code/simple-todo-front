<template>
  <div>TaskList</div>
  <div v-for="task in tasks" :key="task._id" class="task-list">
    <tasks-list-item :taskId="task._id" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import TasksListItem from "./TaskListItem.vue";

export default {
  name: "TaskList",
  components: { TasksListItem },
  setup() {
    const store = useStore();
    const tasks = ref([]);

    onMounted(async () => {
      await store.dispatch("tasks/fetch");
      tasks.value = store.state.tasks.all;
    });

    return {
      tasks,
    };
  },
};
</script>

<style scoped>
.task-list {
  width: 60%;
  margin: auto;
}
</style>
