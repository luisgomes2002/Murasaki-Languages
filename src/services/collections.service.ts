import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getLessonCollectionsService = () => {
  const response = axios.get(`${baseUrl}/lesson-collection/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
