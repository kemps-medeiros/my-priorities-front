import axios from "axios";

const hostname = process.env.REACT_APP_HOSTNAME;

const api = axios.create({
  // baseURL: "http://localhost:5000/myprioritiesapp",
  baseURL: hostname,
});

export default api;
