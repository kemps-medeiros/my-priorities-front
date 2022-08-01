import axios from "axios";

const hostname = process.env.REACT_APP_HOSTNAME;

const api = axios.create({
  // baseURL: "http://localhost:5000/myprioritiesapp",
  baseURL:
    "http://my-priorities.us-east-1.elasticbeanstalk.com/myprioritiesapp",
});

export default api;
