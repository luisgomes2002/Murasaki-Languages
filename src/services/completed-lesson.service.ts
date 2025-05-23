import axios from "axios";
import Cookies from "js-cookie";
import { CompleteLessonProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getCompletedLesson = (userId: string) => {
  const response = axios.get(`${baseUrl}/completed-lesson/${userId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const completeLesson = (data: CompleteLessonProps) => {
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

export const removeLesson = (data: CompleteLessonProps) => {
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
