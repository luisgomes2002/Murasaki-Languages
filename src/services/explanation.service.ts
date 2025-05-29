import axios from "axios";
import Cookies from "js-cookie";
import { DeleteExplanationProps, ExplanationProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getExplanationIdService = (explanationId: string) => {
  const response = axios.get(`${baseUrl}/explanation/${explanationId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createExplanationService = (
  explanation: ExplanationProps,
  lessonId: string,
  userId: string,
) => {
  const response = axios.post(
    `${baseUrl}/explanation/create/${lessonId}/${userId}`,
    explanation,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const updateExplanationService = (
  explanation: ExplanationProps,
  explanationId: string,
  userId: string,
) => {
  const response = axios.post(
    `${baseUrl}/explanation/update/${explanationId}/${userId}`,
    explanation,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const DeleteExplanationService = (
  explanation: DeleteExplanationProps,
) => {
  const response = axios.post(
    `${baseUrl}/explanation/delete/${explanation.explanationId}/${explanation.lessonId}/${explanation.userId}`,
    explanation,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};
