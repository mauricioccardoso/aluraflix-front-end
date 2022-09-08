import type { AxiosInstance } from "axios";
import axios from "axios";
import { store } from "./store"


const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.token}`;
  return config;
});

export default axiosClient;
