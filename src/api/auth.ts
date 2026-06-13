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

// expires_at: '2026-06-13T12:07:13.886Z';
// resend_available_at: '2026-06-13T12:07:13.886Z';
export interface RequestOTPCodeSuccessResponse {
  expires_at: string;
  resend_available_at: string;
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

interface FailedResult {
  detail: {};
}

export interface CreateUserReqPaylaod {
  phone_number: string;
  username: string;
  password: string;
}

interface CreateUserSuccessfullResponse {
  user_id: string;
  phone_number: string;
  username: string;
  access_token: string;
  refresh_token: string;
}

export const requestOTPReq = async (
  payload: RequestOTPCodeInterface,
): Promise<AxiosResponse<RequestOTPCodeSuccessResponse | FailedResult>> => {
  return apiClient.post('auth/otp/request', payload);
};

export const verifyOTPReq = async (
  payload: VerifyOTPCodeInterface,
): Promise<AxiosResponse<VerfiySuccessfullResult | FailedResult>> => {
  return apiClient.post('auth/otp/verify', payload);
};

export const createUserReq = async (
  payload: CreateUserReqPaylaod,
): Promise<AxiosResponse<CreateUserSuccessfullResponse | FailedResult>> => {
  return apiClient.post('auth/create-user', payload);
};

export default {
  requestOTPReq,
  verifyOTPReq,
  createUserReq,
};
