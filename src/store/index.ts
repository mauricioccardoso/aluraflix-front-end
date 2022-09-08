import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type { InjectionKey } from "vue";
import type IUserData from "@/interfaces/IUserData";
import axiosClient from "../axios";

interface State {
  user: IUserData | null;
  token: String | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: null,
    token: sessionStorage.getItem("TOKEN"),
  },
  getters: {},
  actions: {
    register: ({ commit }, user) => {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
  },
  mutations: {
    logout: (state) => {
      sessionStorage.clear();
      state.user = null;
      state.token = null;
    },
    setUser: (state, data) => {
      state.user = data.user;
      state.token = data.token;
      sessionStorage.setItem("TOKEN", data.token);
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
