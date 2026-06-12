import apiClient from './config';

/**
 * Auth API
 * مدیریت تمام endpoint های مربوط به احراز هویت
 */

export type RequestOTPCodePurposeType = 'login' | 'register' | 'password_reset';

export interface RequestOTPCodeInterface {
  phone_number: string;
  purpose: RequestOTPCodePurposeType;
}

export const requestOTPReq = async (payload: RequestOTPCodeInterface) => {
  return apiClient.post('auth/otp/request', payload);
};

export const verifyOTPReq = async (payload) => {
  const response = await apiClient.post('auth/otp/verify', payload);
  return response.data;
};

export const createUserReq = async (payload) => {
  const response = await apiClient.post('auth/create-user', payload);
  return response.data;
};

export default {
  requestOTPReq,
  verifyOTPReq,
  createUserReq,
};
