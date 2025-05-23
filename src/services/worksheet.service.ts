import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getWorksheetId = (worksheetId: string) => {
  const response = axios.get(`${baseUrl}/work-sheets/${worksheetId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
