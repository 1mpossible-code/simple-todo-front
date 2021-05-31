export const tasks = {
  namespaced: true,

  state: {
    all: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.all = tasks;
    },
    addTask(state, body) {
      state.all.push({
        id: state.all.length + 1,
        body,
      });
    },
  },
  actions: {
    fetch(ctx) {
      // TODO: Real fetching tasks
      const tasks = [
        {
          id: 1,
          body: "Label",
        },
        {
          id: 2,
          body: "Label 2",
        },
      ];
      ctx.commit("setTasks", tasks);
    },
    add(ctx, body) {
      // TODO: Add task to DB
      ctx.commit("addTask", body);
    },
  },
};
