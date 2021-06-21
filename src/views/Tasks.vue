<template>
  <div>
    <create-task />

    <div class="title">Tasks</div>

    <div class="links">
      <span class="link">
        <router-link class="r-link" to="/" active-class="r-link-active">
          All
        </router-link>
      </span>
      <span class="link">
        <router-link
          class="r-link"
          to="/completed"
          active-class="r-link-active"
        >
          Completed
        </router-link>
      </span>
      <span class="link">
        <router-link
          class="r-link"
          to="/uncompleted"
          active-class="r-link-active"
        >
          Uncompleted
        </router-link>
      </span>
    </div>

    <task-list :completed="completed" />
  </div>
</template>

<script>
import CreateTask from "../components/CreateTask.vue";
import TaskList from "../components/TaskList.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tasks",
  components: {
    CreateTask,
    TaskList,
  },
  setup() {
    const route = useRoute();
    let completed = computed(() => {
      if (route.params.completed === "completed") return true;
      else if (route.params.completed === "uncompleted") return false;
      return null;
    });

    return {
      completed,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 24px;
  margin-top: 1rem;
  padding-bottom: 1rem;
}

.links {
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid silver;
  border-radius: 10px;
  overflow: hidden;
}

.links > .link {
  width: 100%;
  transition: 0.3s;
}

.links > .link > .r-link {
  transition: 0.3s;
  height: 2rem;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #2c3e50;
}

.links > .link:hover {
  background-color: darkcyan;
}

.links > .link > .r-link-active {
  background-color: darkcyan;
  color: white;
  cursor: default;
}

.links > .link:hover > .r-link {
  color: white;
}
</style>
