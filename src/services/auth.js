import { apiClient } from "./config";

export const apiLogin = async(payload) => apiClient.post("/login", payload);