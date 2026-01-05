import { requestOTPReq } from '@/api';
import { useMutation } from '@tanstack/react-query';

export default function useRequestOTPCode() {
  const requestOTPCode = async (phoneNumber = '') => {
    try {
      const payload = { phone_number: phoneNumber, purpose: 'login' };
      const data = await requestOTPReq(payload);
      console.log('[useRequestOTPCode] result, data', data);

      return data;
    } catch (e) {
      throw new Error('Request OTP Code failed: ', e);
    }
  };

  return useMutation({
    mutationKey: ['request_otp_code'],
    mutationFn: requestOTPCode,
  });
}
