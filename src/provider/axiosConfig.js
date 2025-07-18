import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
