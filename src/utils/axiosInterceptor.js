import axios from "axios";

const axiosInterceptor = {
  config: (store, history) => {
    // axios.defaults.baseURL = SERVICE_URL;

    // Request interceptor
    axios.interceptors.request.use(
      config => {
        // Do something before request is sent
        return config;
      },
      error => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Response interceptor
    axios.interceptors.response.use(
      response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );
  }
};

export default axiosInterceptor;
