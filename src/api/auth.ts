import { AxiosResponse } from 'axios';
import apiClient from './config';

/**
 * Auth API
 */

export type RequestOTPCodePurposeType = 'login' | 'register' | 'password_reset';

export interface RequestOTPCodeInterface {
  phone_number: string;
  purpose: RequestOTPCodePurposeType;
}

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

interface FailedResponse {
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

export interface LoginReqPayload {
  username: string;
  password: string;
}

export interface LoginReqSuccessfullResponse {
  user_id: string;
  username: string;
  access_token: string;
  refresh_token: string;
}

export const requestOTPReq = async (
  payload: RequestOTPCodeInterface,
): Promise<AxiosResponse<RequestOTPCodeSuccessResponse | FailedResponse>> => {
  return apiClient.post('auth/otp/request', payload);
};

export const verifyOTPReq = async (
  payload: VerifyOTPCodeInterface,
): Promise<AxiosResponse<VerfiySuccessfullResult | FailedResponse>> => {
  return apiClient.post('auth/otp/verify', payload);
};

export const createUserReq = async (
  payload: CreateUserReqPaylaod,
): Promise<AxiosResponse<CreateUserSuccessfullResponse | FailedResponse>> => {
  return apiClient.post('auth/create-user', payload);
};

export const loginReq = async (
  paylaod: LoginReqPayload,
): Promise<AxiosResponse<LoginReqSuccessfullResponse | FailedResponse>> => {
  return apiClient.post('auth/login', paylaod);
};

export default {
  requestOTPReq,
  verifyOTPReq,
  createUserReq,
};
