import axios from "axios";
import Cookies from "js-cookie";
import {
  CreateLesson,
  DeleteLessonProps,
  LessonUpdate,
} from "../util/lesson-interface";

const baseUrl = "http://localhost:8080/api";

export const getAllLessonsService = (page = 0, size = 10) => {
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

export const publishLessonsService = () => {
  const response = axios.post(`${baseUrl}/lesson/publish/`);
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

export const getJapaneseLessonByLevelService = (level: string) => {
  const response = axios.get(`${baseUrl}/lesson/japanese-level/${level}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getPublicJapaneseLessonByLevelService = (level: string) => {
  const response = axios.get(
    `${baseUrl}/lesson/japanese-level-public/${level}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const getPublicLessonService = () => {
  const response = axios.get(`${baseUrl}/lesson/public`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getJapanesePublicLessonService = () => {
  const response = axios.get(`${baseUrl}/lesson/japanese/public`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getAllJapaneseLessonsByPublishedTrueService = () => {
  const response = axios.get(`${baseUrl}/lesson/all-japanese/published/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const getLessonByVisibilityService = (visibility: string) => {
  const response = axios.get(`${baseUrl}/lesson/visibility/${visibility}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
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
