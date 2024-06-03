import axios from "axios";

const api = axios.create({
  baseURL: "https://hufs-mutsa-12th.store/",
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default api
