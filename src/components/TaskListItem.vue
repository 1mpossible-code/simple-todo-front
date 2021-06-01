<template>
  <div class="task-list-item" :class="{ completed }">
    <input type="checkbox" v-model="completed" :class="{ completed }" />
    <slot name="content" class="content" />
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "TasksListItem",
  setup() {
    const completed = ref(false);
    watch(completed, (value) => {
      // TODO: Update completed in store
      console.log(value);
    });

    return {
      completed,
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
}
</style>
