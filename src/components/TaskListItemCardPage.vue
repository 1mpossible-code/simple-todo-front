<template>
  <div class="container" v-if="task">
    <header>
      <Link path="/" title="Back" />
      <div class="task-id-container">{{ task._id }}</div>
    </header>
    <task-list-item-card :task-id="task._id" />
  </div>
</template>

<script>
import TaskListItemCard from "./TaskListItemCard";
import Link from "./Link";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "TaskListItemFull",
  components: { Link, TaskListItemCard },
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    onMounted(async () => {
      if (store.state.tasks.all.length === 0) {
        await store.dispatch("tasks/fetch");
      }
    });

    const task = computed(() => store.getters["tasks/getById"](props.taskId));

    return {
      task,
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

.task-id-container {
  margin-right: 1rem;
}
</style>
