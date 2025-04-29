import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const getAllPlansService = () => {
  const response = axios.get(`${baseUrl}/plans/`);
  return response;
};
