import axios from "axios";
import Cookies from "js-cookie";
import { CreateLesson, LessonUpdate } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getAllLessons = (page = 0, size = 10) => {
  const response = axios.get(`${baseUrl}/lesson/`, {
    params: {
      page,
      size,
    },
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

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

export const createLessonService = (data: CreateLesson, userid: string) => {
  const response = axios.post(`${baseUrl}/lesson/create/${userid}`, data, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const publishLessons = () => {
  const response = axios.post(`${baseUrl}/lesson/publish/`);
};

export const updateLesson = (data: LessonUpdate, userId: string) => {
  const response = axios.put(
    `${baseUrl}/lesson/update/${data.id}/${userId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
