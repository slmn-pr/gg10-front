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

    return data;
  };

  return useMutation({
    mutationKey: ['request_otp_code'],
    mutationFn: requestOTPCode,
  });
}
