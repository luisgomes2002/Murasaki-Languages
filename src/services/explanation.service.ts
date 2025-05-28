import axios from "axios";
import Cookies from "js-cookie";
import { DeleteExplanationProps, ExplanationProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getExplanationId = (explanationId: string) => {
  const response = axios.get(`${baseUrl}/explanation/${explanationId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createExplanation = (
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

export const UpdateExplanation = (
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

export const DeleteExplanation = (explanation: DeleteExplanationProps) => {
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
