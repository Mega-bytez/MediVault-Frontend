import { apiClient } from "./config";

export const apiLogin = async(payload) => apiClient.post("/login", payload);



export const apiSignIn = async(payload) => apiClient.post("/register", payload);


