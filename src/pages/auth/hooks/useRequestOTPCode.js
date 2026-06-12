import { useMutation } from '@tanstack/react-query';

export default function useRequestOTPCode() {
  const requestOTPCode = async (params) => {
    const phoneNumber =
      typeof params === 'string' ? params : params?.phoneNumber || params?.phone_number;
    const purpose = typeof params === 'object' ? params?.purpose : 'login';

    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      phone_number: phoneNumber,
      purpose: purpose || 'login',
      code: '12345',
    };
  };

  return useMutation({
    mutationKey: ['request_otp_code'],
    mutationFn: requestOTPCode,
  });
}
