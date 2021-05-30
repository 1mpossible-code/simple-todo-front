<template>
  <div>Simple TODO app</div>
  <create-task/>
</template>

<script>
import CreateTask from "@/components/CreateTask";

export default {
  name: "App",
  components: {
    CreateTask,
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
