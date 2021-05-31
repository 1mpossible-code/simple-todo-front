import { createStore } from "vuex";
import { tasks } from "./tasks.js";

export default createStore({
  modules: {
    tasks,
  },
});
