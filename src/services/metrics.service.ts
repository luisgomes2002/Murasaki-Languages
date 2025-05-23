import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8080/api";

export const getMetricsByDate = (date: string) => {
  return axios.get(`${baseUrl}/metrics/`, {
    params: { date },
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export const getMetrics = () => {
  return axios.get(`${baseUrl}/metrics/metrics-date/`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};
