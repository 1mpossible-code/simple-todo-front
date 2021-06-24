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
      <div class="content" :class="{ completed }">
        <span class="label">Complete: </span>
        <span class="body">
          <button
            class="complete"
            @click="toggleCompletion"
            :class="{ completed }"
          >
            {{ completed ? "INCOMPLETE" : "COMPLETE" }}
          </button>
        </span>
      </div>
      <button class="delete" @click="deleteTask">DELETE</button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import router from "../router";

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

    const toggleCompletion = () => {
      completed.value = !completed.value;
    };

    const deleteTask = () => {
      store.dispatch("tasks/destroy", props.taskId);
      router.push("/");
    };

    return {
      completed,
      task,
      deleteTask,
      toggleCompletion,
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

.body > button {
  width: 30%;
  height: 2rem;
  transition: 0.3s;
  border: 1px solid silver;
  border-radius: 10px;
  background-color: darkcyan;
  color: #eeeeee;
}

.body > button.completed {
  background-color: #dddddd;
  color: #807e7e;
}

.body > button:hover {
  filter: brightness(85%);
  transform: scale(1.1);
}

.body {
  transition: 0.3s;
  font-weight: 600;
}

.content {
  float: left;
  width: 100%;
  margin-bottom: 2rem;
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

.completed {
  color: gray;
  font-weight: 400;
}

.line-through {
  text-decoration: line-through;
}

.delete {
  color: red;
  border: none;
  background: none;
  cursor: pointer;
}

.delete:hover {
  text-decoration: underline;
}
</style>
