import axios from "axios";

export const APIClient = axios.create({
  baseURL: "http://localhost:3000/api",
});
