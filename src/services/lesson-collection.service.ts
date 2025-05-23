import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

interface createLessonCollection {
  userId: string;
  collectionName: string;
}

export const allLessonCollection = () => {
  const response = axios.get(`${baseUrl}/lesson-collection/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createLessonCollection = (data: createLessonCollection) => {
  const response = axios.post(
    `${baseUrl}/lesson-collection/create/${data.userId}`,
    data.collectionName,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
