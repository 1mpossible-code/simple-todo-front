import {apiConfig} from "../../config/api.config.js";

export const tasks = {
  namespaced: true,

  state: {
    all: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.all = tasks;
    },
    addTask(state, task) {
      state.all.push(task);
    },
    markCompletedAs(state, { _id, value }) {
      state.all.find((x) => x._id === _id).completed = value;
    },
  },
  actions: {
    async fetch(ctx) {
      const tasks = await fetch(apiConfig.url);
      const tasksJson = await tasks.json();
      ctx.commit("setTasks", tasksJson);
    },
    async add(ctx, task) {
      // Create request options
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: task.body, completed: task.completed }),
      };
      // Write new task with api and get written task
      const resp = await fetch(apiConfig.url, requestOptions);
      ctx.commit("addTask", await resp.json());
    },
    async toggleComplete(ctx, _id) {
      const task = ctx.getters.getById(_id);
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      };
      const resp = await fetch(`${apiConfig.url}/${_id}/`, requestOptions);
      const json = await resp.json();
      if (json['nModified'] === 1) {
        ctx.commit("markCompletedAs", {
          _id,
          value: !task.completed,
        });
      }
    },
  },

  getters: {
    getById: (state) => (_id) => {
      return state.all.find((x) => x._id === _id);
    },
  },
};
