import axiosClient from "../../services/axiosClient";

export const loginRequest = async (credentials) => {
  const response = await axiosClient.post("/auth/login", credentials);
  return response.data;
};