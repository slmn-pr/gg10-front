import { RequestOTPCodeInterface, requestOTPReq } from '@/api';
import { useMutation } from '@tanstack/react-query';

interface RequestOTPCodeSuccessfullReturn {
  expires_at: string;
  resend_available_at: string;
}

interface FailedDetail {
  loc: [];
  msg: string;
  type: string;
  input: string;
  ctx: {};
}

interface RequestOTPCodeFailedReturn {
  detail: FailedDetail[];
}

export default function useRequestOTPCode() {
  const requestOTPCode = async (params: RequestOTPCodeInterface) => {
    const { data, status } = await requestOTPReq(params);

    console.log('[OTP_CODE][useRequestOTPCode]', status, data);

    // if (status === 201) {
    //   return {
    //     expires_at: '2026-06-12T11:10:12.751Z',
    //     resend_available_at: '2026-06-12T11:10:12.751Z',
    //   };
    // }
  };

  return useMutation({
    mutationKey: ['request_otp_code'],
    mutationFn: requestOTPCode,
  });
}
