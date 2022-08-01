import axios from "axios";

// http://my-priorities.us-east-1.elasticbeanstalk.com/

const api = axios.create({
  baseURL: "http://localhost:5000/myprioritiesapp",
});

export default api;
