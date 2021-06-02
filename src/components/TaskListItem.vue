<template>
  <div class="task-list-item" :class="{ completed }">
    <input type="checkbox" v-model="completed" :class="{ completed }" />
    <div class="content">{{ task.body }}</div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "TasksListItem",
  props: {
    taskId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    // Use vuex store
    const store = useStore();
    // Create completed model
    const completed = ref(false);
    // Create computed task getter depending on props id
    const task = computed(() => store.getters["tasks/getById"](props.taskId));
    // Watch for changing completed module and toggle the task.completed value depending on it
    watch(completed, () => {
      // Toggle completed value
      store.dispatch("tasks/toggleComplete", props.taskId);
    });

    return {
      completed,
      task,
    };
  },
};
</script>

<style scoped>
.task-list-item {
  border: 1px solid silver;
  padding: 0.5rem;
  margin: 2rem 5rem;
  border-radius: 10px;
  display: flex;
  color: darkcyan;
  transition: 0.3s;
}

input {
  margin: 0 20px;
}

.completed {
  color: gray;
  background-color: #eee;
  text-decoration: line-through;
}
</style>
