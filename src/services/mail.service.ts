import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const confirmEmailService = (token: string) => {
  return axios.get(`${baseUrl}/mail/confirm-account?token=${token}`);
};
