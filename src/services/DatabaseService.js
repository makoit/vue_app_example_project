import axios from "axios";
const PATH = "/student";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

export default {
  getStudents() {
    return apiClient.get(PATH + "/?limit=20&skip=0")
  }
};
