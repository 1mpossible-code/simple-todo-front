export const tasks = {
  namespaced: true,

  state: {
    all: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.all = tasks;
    },
    addTask(state, { body, completed }) {
      state.all.push({
        id: state.all.length + 1,
        body,
        completed,
      });
    },
    markCompletedAs(state, { id, value }) {
      state.all.find((x) => x.id === id).completed = value;
    },
  },
  actions: {
    fetch(ctx) {
      // TODO: Real fetching tasks
      const tasks = [
        {
          id: 1,
          body: "Label",
          completed: false,
        },
        {
          id: 2,
          body: "Label 2",
          completed: false,
        },
      ];
      ctx.commit("setTasks", tasks);
    },
    add(ctx, task) {
      // TODO: Add task to DB
      ctx.commit("addTask", { body: task.body, completed: task.completed });
    },
    toggleComplete(ctx, id) {
      // TODO: Complete task in DB
      ctx.commit("markCompletedAs", {
        id,
        value: !ctx.getters.getById(id).completed,
      });
    },
  },

  getters: {
    getById: (state) => (id) => {
      return state.all.find((x) => x.id === id);
    },
  },
};
