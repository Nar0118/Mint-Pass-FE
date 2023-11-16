import axios, { InternalAxiosRequestConfig } from 'axios';
import * as localStorage from 'utils/services/localStorageService';
import localStorageKeys from 'utils/constants/localStorageKeys';
import env from 'utils/constants/env';

export const axiosInstance = axios.create({
  baseURL: env.nextPublicApiBaseUrl,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItemFromLocalStorage(
      localStorageKeys.TOKEN_KEY,
    );

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
