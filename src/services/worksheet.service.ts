import axios from "axios";
import Cookies from "js-cookie";
import {
  DeleteWorksheetPros,
  WorksheetsProps,
  WorksheetsUpdateProps,
} from "../util/worksheet-interface";

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

export const deleteWorksheetsService = (worksheet: DeleteWorksheetPros) => {
  const response = axios.delete(
    `${baseUrl}/work-sheets/delete/${worksheet.worksheetId}/${worksheet.lessonId}/${worksheet.userId}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const updateWorksheetsSection = (worksheets: WorksheetsUpdateProps) => {
  const response = axios.put(
    `${baseUrl}/work-sheets/update/${worksheets.worksheetId}/${worksheets.userId}`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );

  return response;
};
