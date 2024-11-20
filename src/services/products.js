import { apiClient } from "./config";

export const apiGetAllProducts = async () => apiClient.get(`/products`);

export const apiGetAllVendorProducts = async () => apiClient.get(`/products/me`);

export const apiGetSingleProduct = async (id) =>
  apiClient.get(`/products/${id}`);

export const apiAddProduct = async (payload) =>
  apiClient.post(`/products`, payload);

export const apiEditProduct = async (id, payload) => apiClient.patch(`/products/${id}`, payload);

export const apiDeleteProduct = async (id) => apiClient.delete(`/products/${id}`);

// Get all vendor specific products, without authentication.
export const apiGetAllVendorSpecificProducts = async (id) =>
  apiClient.get(`/products/vendors/${id}`);


export const apiSearchProduct = async (searchTerm) =>
  apiClient.get(
    `/products?filter={"name":{"$regex":"${searchTerm}","$options":"i"}}`
  );
