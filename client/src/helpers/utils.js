import { logout } from "../reducers/authSlice";
import { API_URL } from "./constants";
import { useNavigateUtil } from "../hooks/useNavigateUtil";
export const getFullUrl = (url) => {
  return `${API_URL}${url}`;
};

export const getHeaders = () => {
  const token = localStorage.getItem("token");

  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token ? true : false;
};

export const handleLogoutLocal = () => {
  localStorage.removeItem("token");
  useNavigateUtil("/login");
};

