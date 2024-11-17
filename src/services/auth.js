import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/login", payload);

// export const apiSignIn = async(payload) => apiClient.post("/register", payload);

export const apiSignIn = async (payload) =>
  apiClient.post("/register", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
