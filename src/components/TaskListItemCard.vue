<template>
  <div class="container">
    <div class="back-link-container">
      <router-link to="/" class="back-link">Back</router-link>
    </div>
    <div class="task-list-item" :class="{ completed }">
      <input type="checkbox" v-model="completed" :class="{ completed }" />
      <div class="content">{{ task.body }}</div>
      <button class="delete" @click="deleteTask">DELETE</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

export default {
  name: "TaskListItemFull",
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

    const deleteTask = () => {
      store.dispatch("tasks/destroy", props.taskId);
    };

    return {
      completed,
      task,
      deleteTask,
    };
  },
};
</script>

<style scoped>
.container {
  width: calc(100% / 3);
  border: 1px solid silver;
  border-radius: 20px;
  padding: 1%;
  box-sizing: border-box;
  min-height: 200px;
}

.back-link-container {
  width: 100%;
  float: left;
}

.back-link {
  width: 6rem;
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
  margin-bottom: 10px;
}

.back-link:hover {
  filter: brightness(110%);
  transform: scale(1.1);
}

.task-list-item {
  display: block;
}

input {
  margin: 0 20px;
  float: left;
}

.completed {
  color: gray;
  background-color: #eee;
}

.delete {
  margin-left: auto;
  float: right;
  color: red;
  border: none;
  background: none;
  cursor: pointer;
}

.delete:hover {
  text-decoration: underline;
}
</style>
