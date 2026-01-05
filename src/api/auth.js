import apiClient from './config';

/**
 * Auth API
 * مدیریت تمام endpoint های مربوط به احراز هویت
 */

/**
 * درخواست OTP
 * @param {Object} payload - { phone_number: string, purpose?: 'login' | 'register' | 'password_reset' }
 * @returns {Promise} OTPRequestResponse
 */
export const requestOTPReq = async (payload) => {
  const response = await apiClient.post('auth/otp/request', payload);
  return response.data;
};

/**
 * تایید OTP
 * @param {Object} payload - { phone_number: string, code: string, purpose?: 'login' | 'register' | 'password_reset' }
 * @returns {Promise} OTPVerifyResponse
 */
export const verifyOTPReq = async (payload) => {
  const response = await apiClient.post('auth/otp/verify', payload);
  return response.data;
};

/**
 * ایجاد کاربر (فقط برای development/testing)
 * @param {Object} payload - { phone_number: string, username: string, password?: string }
 * @returns {Promise} CreateUserResponse
 */
export const createUserReq = async (payload) => {
  const response = await apiClient.post('auth/create-user', payload);
  return response.data;
};

export default {
  requestOTPReq,
  verifyOTPReq,
  createUserReq,
};
