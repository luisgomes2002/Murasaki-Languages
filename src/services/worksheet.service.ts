import axios from "axios";
import Cookies from "js-cookie";
import { WorksheetsProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

export const getWorksheetIdService = (worksheetId: string) => {
  const response = axios.get(`${baseUrl}/work-sheets/${worksheetId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};

export const createWorksheetsService = (
  lessonId: string,
  userId: string,
  workSheets: WorksheetsProps,
) => {
  const response = axios.post(
    `${baseUrl}/work-sheets/create/${lessonId}/${userId}`,
    workSheets,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );

  return response;
};
