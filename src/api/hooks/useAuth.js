import { useMutation, useQuery } from '@tanstack/react-query';
import { requestOTP, verifyOTP, createUser } from '../auth';

/**
 * Hook برای درخواست OTP
 */
export const useRequestOTP = () => {
  return useMutation({
    mutationFn: requestOTP,
    mutationKey: ['auth', 'request-otp'],
  });
};

/**
 * Hook برای تایید OTP
 */
export const useVerifyOTP = () => {
  return useMutation({
    mutationFn: verifyOTP,
    mutationKey: ['auth', 'verify-otp'],
  });
};

/**
 * Hook برای ایجاد کاربر (development/testing)
 */
export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    mutationKey: ['auth', 'create-user'],
  });
};
