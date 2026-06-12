import { useMutation } from '@tanstack/react-query';

export default function useVerifyOTPCode() {
  const verifyOTPCode = async (payload = { phone_number: '', code: '' }) => {
    if (!payload?.phone_number || !payload?.code) {
      throw new Error('Phone number or otp code is empty');
    }

    payload['purpose'] = payload.purpose || 'login';

    await new Promise((resolve) => setTimeout(resolve, 400));

    if (payload.code !== '12345') {
      throw new Error('کد وارد شده صحیح نیست');
    }

    return {
      access_token: 'mock-access-token',
      refresh_token: 'mock-refresh-token',
      player_rank: null,
      phone_number: payload.phone_number,
      purpose: payload.purpose,
    };
  };

  return useMutation({
    mutationKey: ['verify_otp_code'],
    mutationFn: verifyOTPCode,
  });
}
