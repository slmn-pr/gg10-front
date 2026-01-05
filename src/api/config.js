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

/**
 * Response Interceptor
 * مدیریت خطاها و refresh token
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // اگر خطای 401 دریافت شد و قبلاً refresh نکرده‌ایم
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = useAuthStore.getState().getRefreshToken();

        // TODO: پیاده‌سازی refresh token endpoint
        // اگر endpoint refresh token دارید، اینجا فراخوانی کنید
        // const response = await axios.post(`${BASE_URL}auth/refresh`, {
        //   refresh_token: refreshToken,
        // });
        //
        // const { access_token, refresh_token } = response.data;
        // useAuthStore.getState().setAuth(access_token, refresh_token);
        //
        // originalRequest.headers.Authorization = `Bearer ${access_token}`;
        // return apiClient(originalRequest);

        // اگر refresh token نداریم، کاربر را logout کنیم
        useAuthStore.getState().clearAuth();
        window.location.href = '/auth';

        return Promise.reject(error);
      } catch (refreshError) {
        useAuthStore.getState().clearAuth();
        window.location.href = '/auth';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
