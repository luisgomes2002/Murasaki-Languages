import axios from "axios";
import Cookies from "js-cookie";
import { CreateLessonCollection } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const allLessonCollectionService = () => {
  const response = axios.get(`${baseUrl}/lesson-collection/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createLessonCollectionService = (data: CreateLessonCollection) => {
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
