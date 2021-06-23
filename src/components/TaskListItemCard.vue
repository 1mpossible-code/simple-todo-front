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
    <div class="card">
      <div class="content" :class="{ completed }">
        <span class="label">Body: </span>
        <span class="body" :class="completed && 'line-through'">
          {{ task.body }}
        </span>
      </div>
      <div class="task-list-item">
        <input type="checkbox" v-model="completed" :class="{ completed }" />
        <button class="delete" @click="deleteTask">DELETE</button>
      </div>
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

.card {
  width: 100%;
  border-radius: 20px;
  padding: 5%;
  box-sizing: border-box;
  min-height: 16rem;
  -webkit-box-shadow: 0 0 30px 10px rgba(34, 60, 80, 0.1);
  -moz-box-shadow: 0 0 30px 10px rgba(34, 60, 80, 0.1);
  box-shadow: 0 0 30px 10px rgba(34, 60, 80, 0.1);
}

.back-link-container {
  width: 30%;
}

.label {
  transition: 0.3s;
  float: left;
}

.body {
  transition: 0.3s;
  font-weight: 600;
}

.content {
  float: left;
  width: 100%;
  margin-bottom: 10px;
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

.task-list-item {
  display: block;
}

input {
  margin: 0 20px;
  float: left;
}

.completed {
  color: gray;
  font-weight: 400;
}

.line-through {
  text-decoration: line-through;
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
