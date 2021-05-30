<template>
  <div class="create-task">
    <div class="label">
      <label for="newTask">New Task</label>
    </div>

    <div class="form">
      <input type="text" id="newTask" v-model="message" />
      <button @click.prevent="click">Create!</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CreateTask",

  setup() {
    const message = ref("");

    const click = () => {
      console.log("clicked", message.value);
    };

    return {
      click,
      message,
    };
  },
};
</script>

<style scoped>
.label {
  margin-bottom: 1rem;
  font-size: 24px;
}

.form {
  padding-bottom: 2rem;
  border-bottom: 1px solid silver;
}

.form > button {
  color: white;
  background-color: darkcyan;
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid silver;
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
}

.form > button:hover {
  filter: brightness(120%);
  cursor: pointer;
}

.form > input {
  margin-right: 1rem;
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px solid silver;
}

@media (max-width: 400px) {
  .form > input {
    margin-bottom: 1rem;
    margin-right: 0;
  }
}
</style>
