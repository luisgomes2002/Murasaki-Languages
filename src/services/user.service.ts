import axios from "axios";

const baseUrl = "http://localhost:8080/api";

interface SignInProps {
  email: string;
  password: string;
}

export const signin = (data: SignInProps) => {
  const response = axios.post(`${baseUrl}/user/login`, data);
  return response;
};
