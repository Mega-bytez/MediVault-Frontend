import { apiClient } from "./config";

export const apiGetAllProducts = async () => apiClient.get(`/getAllProduct`);


export const apiGetAllVendorProducts = async () => apiClient.get(`/vendorPro`);


export const apiGetSingleProduct = async (id) => apiClient.get(`/getOneProduct/${id}`);


export const apiAddProduct = async (payload) => apiClient.post(`/addProduct`, payload); 


export const apiEditProduct = async (id) => apiClient.patch(`/update`, id);
