import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getAllPublishedLesson = () => {
  const response = axios.get(`${baseUrl}/lesson/published-true`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getLessonById = (id: string) => {
  const response = axios.get(`${baseUrl}/lesson/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
