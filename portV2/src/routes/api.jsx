import axios from "axios";

const api = axios.create({
  baseURL: "https://hufs-mutsa-12th.store/",
});

export default api
