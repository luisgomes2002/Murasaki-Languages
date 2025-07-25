import axios from "axios";
import Cookies from "js-cookie";
import { LanguageCollectionsProps } from "../util/interfaces/collection-interface";

const baseUrl = "http://localhost:8080/api";

export const getLessonCollectionsService = () => {
  const response = axios.get(`${baseUrl}/lesson-collection/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createLessonCollectionService = (
  userId: string,
  languageName: string,
) => {
  const response = axios.post(
    `${baseUrl}/lesson-collection/create/${userId}`,
    { languageName },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const updateLessonCollectionService = (
  collectionId: string,
  userId: string,
  languageCollectionsProps: LanguageCollectionsProps,
) => {
  const response = axios.put(
    `${baseUrl}/lesson-collection/update/${collectionId}/${userId}`,
    languageCollectionsProps,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
