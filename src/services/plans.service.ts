import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const getAllPlansService = () => {
  return axios.get(`${baseUrl}/plans/`);
};
