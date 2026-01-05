import { verifyOTPReq } from '@/api';
import { useMutation } from '@tanstack/react-query';

export default function useVerifyOTPCode() {
  const verifyOTPCode = async (payload = { phone_number: '', code: '' }) => {
    if (!payload?.phone_number || !payload?.code) {
      throw new Error('Phone number or otp code is empty');
    }

    payload['purpose'] = 'login';

    try {
      return await verifyOTPReq(payload);
    } catch (e) {
      throw new Error(`Verify OTP code failed: ${e?.message}`);
    }
  };

  return useMutation({
    mutationKey: ['verify_otp_code'],
    mutationFn: verifyOTPCode,
  });
}
