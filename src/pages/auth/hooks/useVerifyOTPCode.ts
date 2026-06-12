import { VerifyOTPCodeInterface, verifyOTPReq } from '@/api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function useVerifyOTPCode() {
  const verifyOTPCode = async (payload: VerifyOTPCodeInterface) => {
    if (!payload?.phone_number || !payload?.code) {
      throw new Error('Phone number or otp code is empty');
    }

    const { data, status } = await verifyOTPReq(payload);

    console.log('[OTP_CODE][useVerifyOTPCode] status', status);
    console.log('[OTP_CODE][useVerifyOTPCode] data', data);

    return data;
  };

  return useMutation({
    mutationKey: ['verify_otp_code'],
    mutationFn: verifyOTPCode,
    onError: (error) => {
      console.log('[OTP_CODE][useVerifyOTPCode] error', error);

      const msg = error?.response.data.message || error.message;

      toast.error(msg);
    },
  });
}
