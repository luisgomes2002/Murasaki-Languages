import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getAllBacklogService = () => {
  const response = axios.get(`${baseUrl}/backlog/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
