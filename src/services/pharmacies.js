import { apiClient } from "./config";

export const apiGetAllPharmacies = async () => apiClient.get(`/allUsers`);


export const apiGetSinglePharmacy = async () => apiClient.get(`/profile`);
