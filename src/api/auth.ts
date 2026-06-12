import { AxiosResponse } from 'axios';
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

export interface VerifyOTPCodeInterface {
  phone_number: string;
  purpose: RequestOTPCodePurposeType;
  code: string;
}

interface VerfiySuccessfullResult {
  phone_number: string;
  purpose: RequestOTPCodePurposeType;
  verified_at: string;
  user_id: string;
  access_token: string;
  refresh_token: string;
  requires_profile: boolean;
}

interface VerfiyFailedResult {
  detail: {};
}

export const requestOTPReq = async (payload: RequestOTPCodeInterface) => {
  return apiClient.post('auth/otp/request', payload);
};

export const verifyOTPReq = async (
  payload: VerifyOTPCodeInterface,
): Promise<AxiosResponse<VerfiySuccessfullResult | VerfiyFailedResult>> => {
  return apiClient.post('auth/otp/verify', payload);
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
