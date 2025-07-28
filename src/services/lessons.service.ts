import axios from "axios";
import Cookies from "js-cookie";
import {
  CreateLesson,
  DeleteLessonProps,
  LessonUpdate,
} from "../util/interfaces/lesson-interface";

const baseUrl = "http://localhost:8080/api";

export const getAllLessonsService = (page = 0, size = 15) => {
  const response = axios.get(`${baseUrl}/lesson/?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getAllPublishedTrueLessonService = () => {
  const response = axios.get(`${baseUrl}/lesson/published-true`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getLessonByIdService = (id: string) => {
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

export const updateLessonService = (data: LessonUpdate, userId: string) => {
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

export const getJapaneseLessonByLevelService = (
  level: string,
  page = 0,
  size = 15,
) => {
  return axios.get(
    `${baseUrl}/lesson/japanese-level/${level}?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
};

export const getPublicJapaneseLessonByLevelService = (
  level: string,
  page = 0,
  size = 15,
) => {
  return axios.get(
    `${baseUrl}/lesson/japanese-level-public/${level}?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
};

export const getPublicLessonService = (page = 0, size = 15) => {
  return axios.get(`${baseUrl}/lesson/public?page=${page}&size=${size}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export const getJapanesePublicLessonService = () => {
  const response = axios.get(`${baseUrl}/lesson/japanese/public`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getAllJapaneseLessonsByPublishedTrueService = (
  page = 0,
  size = 15,
) => {
  const response = axios.get(
    `${baseUrl}/lesson/all-japanese/published/?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const getLessonByVisibilityService = (
  visibility: string,
  page = 0,
  size = 15,
) => {
  const response = axios.get(
    `${baseUrl}/lesson/visibility/${visibility}?page=${page}&size=${size}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const deleteLessonService = (lesson: DeleteLessonProps) => {
  const response = axios.delete(
    `${baseUrl}/lesson/delete/${lesson.lessonId}/${lesson.userId}/${lesson.lessonName}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
