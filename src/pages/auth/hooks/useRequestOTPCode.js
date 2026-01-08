import { requestOTPReq } from '@/api';
import { useMutation } from '@tanstack/react-query';

export default function useRequestOTPCode() {
  const requestOTPCode = async (phoneNumber) => {
    try {
      const payload = { phone_number: phoneNumber, purpose: 'login' };
      const { data } = await requestOTPReq(payload);
      return data;
    } catch (error) {
      const status = error?.response?.status;
      console.log('[useRequestOTPCode] error: ', error);
      console.log('[useRequestOTPCode] status: ', status);

      if (status === 429) {
        console.log('HERE >>>');

        throw new Error('تلاش بیش از حد مجاز، بعداً دوباره تلاش کنید');
      }

      if (status === 401) {
        throw new Error('دسترسی غیرمجاز');
      }

      throw new Error(error?.response?.data?.message || 'خطا در ارسال کد');
    }
  };

  return useMutation({
    mutationKey: ['request_otp_code'],
    mutationFn: requestOTPCode,
  });
}
