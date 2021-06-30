<template>
  <div class="task-list-item" :class="{ completed }">
    <input type="checkbox" v-model="completed" />
    <div class="content">
      <router-link :to="`/task/${taskId}`" class="link">
        {{ task.body }}
      </router-link>
    </div>
    <div class="delete-container">
      <delete-task-button :task-id="taskId" />
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import DeleteTaskButton from "./DeleteTaskButton";

export default {
  name: "TasksListItem",
  components: { DeleteTaskButton },
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // Use vuex store
    const store = useStore();
    // Create computed task getter depending on props id
    const task = computed(() => store.getters["tasks/getById"](props.taskId));
    // Create completed model
    const completed = ref(task.value.completed);
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
  margin: 1rem 5rem;
  border-radius: 10px;
  display: flex;
  color: darkcyan;
  transition: 0.3s;
  align-items: center;
}

input {
  margin: 0 20px;
}

.completed {
  background-color: #eee;
}

.content > .link {
  text-decoration: none;
  color: #2c3e50;
}

.completed > .content > .link {
  color: gray;
}

.completed .content {
  text-decoration: line-through;
}

.delete-container {
  float: right;
  margin-left: auto;
}
</style>
