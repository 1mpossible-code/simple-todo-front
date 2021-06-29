<template>
  <div>
    <button class="delete" @click="deleteTask">DELETE</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import router from "../router";

export default {
  name: "DeleteTaskButton",
  props: {
    taskId: {
      type: String,
      required: true,
    },
    withRedirect: {
      type: Boolean,
    },
  },
  setup(props) {
    // Use vuex store
    const store = useStore();

    const deleteTask = () => {
      store.dispatch("tasks/destroy", props.taskId);
      if (props.withRedirect) router.push("/");
    };
    return {
      deleteTask,
    };
  },
};
</script>

<style scoped>
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
