import axios from 'axios';
import useAuthStore from '@/store/auth-store';

/**
 * API Base URL
 * می‌توانید از متغیر محیطی استفاده کنید یا مستقیماً URL را تنظیم کنید
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

/**
 * ایجاد instance اصلی axios
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
});

/**
 * Request Interceptor
 * اضافه کردن access token به header درخواست‌ها
 */
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().getAccessToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      useAuthStore.getState().clearAuth();
    }

    return Promise.reject(error);
  },
);

export default apiClient;
