<template>
  <div class="logo">Simple TODO app</div>
  <create-task/>
</template>

<script>
import CreateTask from "./components/CreateTask";

export default {
  name: "App",
  components: {
    CreateTask,
  },
};
</script>

<style scoped>
.logo {
  font-size: 36px;
  margin-bottom: 2rem;
}
</style>
