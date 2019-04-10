import axios from "axios";

const api = axios.create({
  baseURL: "https://up-every-backend.herokuapp.com/"
});

export default api;
