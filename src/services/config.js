import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);

//bringing in your access Token to authenticate
//access token from local storage
const token = localStorage.getItem("token");

//add token as header if received
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


export const apiClient = axios.create({
    baseURL: baseUrl,
});


// Add a request interceptor to dynamically add the Authorization header
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Add a request interceptor to dynamically add the Authorization header
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      localStorage.removeItem("token"); // Remove invalid token
      window.location.href = "/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);
