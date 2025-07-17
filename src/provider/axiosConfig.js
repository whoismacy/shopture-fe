import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    xhrFields: { withCredentials: true },
  },
});

export default instance;
