import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getExplanationId = (explanationId: string) => {
  const response = axios.get(`${baseUrl}/explanation/${explanationId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
