import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getAllBacklogService = (page = 0, size = 15) => {
  return axios.get(`${baseUrl}/backlog/?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};
