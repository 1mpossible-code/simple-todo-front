<template>
  <div v-for="task in tasks" :key="task._id" class="task-list">
    <tasks-list-item :taskId="task._id" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import TasksListItem from "./TaskListItem.vue";

export default {
  name: "TaskList",
  props: {
    completed: {
      type: Boolean,
      default: null,
    },
  },
  components: { TasksListItem },
  setup(props) {
    const store = useStore();
    const tasks = computed(() => {
      if (props.completed === null) return store.state.tasks.all;
      if (props.completed) return store.getters["tasks/getCompleted"];
      if (!props.completed) return store.getters["tasks/getUncompleted"];
      return null;
    });

    onMounted(async () => {
      await store.dispatch("tasks/fetch");
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
