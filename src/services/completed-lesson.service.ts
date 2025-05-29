import axios from "axios";
import Cookies from "js-cookie";
import { CompleteLessonProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getCompletedLessonService = (userId: string) => {
  const response = axios.get(`${baseUrl}/completed-lesson/${userId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const completeLessonService = (data: CompleteLessonProps) => {
  const response = axios.post(
    `${baseUrl}/completed-lesson/add/${data.userId}/${data.lessonId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const removeLessonService = (data: CompleteLessonProps) => {
  const response = axios.delete(
    `${baseUrl}/completed-lesson/remove/${data.userId}/${data.lessonId}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
