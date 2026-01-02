import { useMutation } from '@tanstack/react-query';

export default function useAuthorizeOTPCode() {
  return useMutation({
    mutationKey: ['authorize-otp-code'],
    mutationFn: async (otpCode) => {
      //   const response = await axios.post('/api/auth/authorize-otp-code', {
      //     otpCode,
      //   });
      //   return response.data;

      // TODO: Call API to authorize OTP code
      // Fake call for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (otpCode === '12345') {
        return true;
      }
      return false;
    },
  });
}
