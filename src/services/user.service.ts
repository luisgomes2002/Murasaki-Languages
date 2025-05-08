import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const signin = (data: SignInProps) => {
  const response = axios.post(`${baseUrl}/user/login`, data);
  return response;
};

export const signup = (data: SignUpProps) => {
  const response = axios.post(`${baseUrl}/user/create`, data);
  return response;
};

export const getAllUsers = () => {
  const response = axios.get(`${baseUrl}/user/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
