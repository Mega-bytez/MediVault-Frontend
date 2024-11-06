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
