import axios from "axios";
import Cookies from "js-cookie";
import { PlansProps } from "../util/interfaces/plans-interface";

const baseUrl = "http://localhost:8080/api";

export const getAllPlansService = () => {
  return axios.get(`${baseUrl}/plans/`);
};

export const updatePlanService = (
  planId: string,
  userId: string,
  plan: PlansProps,
) => {
  const response = axios.put(
    `${baseUrl}/plans/update/${planId}/${userId}`,
    { plan },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );

  return response;
};

export const createPlanService = (plan: PlansProps, userId: string) => {
  const response = axios.post(
    `${baseUrl}/plans/create/${userId}`,
    { plan },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    },
  );
  return response;
};

export const deletePlanService = (planId: string, userId: string) => {
  const response = axios.delete(`${baseUrl}/plans/delete/${planId}/${userId}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
};
