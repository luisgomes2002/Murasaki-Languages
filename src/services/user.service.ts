import axios from "axios";
import Cookies from "js-cookie";
import { SignInProps, SignUpProps } from "../util/interfaces";

const baseUrl = "http://localhost:8080/api";

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

export const getUserById = (id: string) => {
  const response = axios.get(`${baseUrl}/user/list/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });

  return response;
};
