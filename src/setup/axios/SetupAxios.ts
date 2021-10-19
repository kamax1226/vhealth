import { v4 } from "uuid";
import axios from "axios"
import store from "setup/redux/Store";

console.log("REACT_APP_API_URL", process.env.REACT_APP_API_URL);

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        mode: 'no-cors',
        // 'X-Api-Key': idToken,
    },
});

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
    (config: any) => {
        const {
            auth: { accessToken }
        } = store.getState();

        if (accessToken) {
            config.headers = {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Correlation-Id': v4()
            }
        }

        return config;
    },
    (err: any) => Promise.reject(err)
);

// Response interceptor for API calls
axiosInstance.interceptors.response.use(
    (response: any) => {
        if (response.status === 200) {
            if (response.data.code === 200) {
                return Promise.resolve(response.data);
            } else {
                return Promise.resolve(response);
            }
        } else {
            return Promise.reject(response);
        }
    },
    async (error: any) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            // const accessToken = await refreshAccessToken();
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
            return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
