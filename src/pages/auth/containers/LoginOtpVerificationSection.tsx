import { useEffect, useMemo } from 'react';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import { useStep } from '../context';
import useAuthStore from '@/store/auth-store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import useSaveUserAuth from '../hooks/useSaveUserAuth';
import OtpSection from './OTPSection';

export default function LoginOtpVerificationSection() {
  const { setAuth } = useAuthStore();
  const saveAuth = useSaveUserAuth(setAuth);

  const { mutate: requestOTPCode, isPending: isPendingOTPCode } = useRequestOTPCode();
  const { mutate: verifyOTPCode, isPending: isVerifyingOTPCode } = useVerifyOTPCode();
  const navigate = useNavigate();

  const { phoneNumber } = useStep();

  const isPending = useMemo(
    () => isPendingOTPCode || isVerifyingOTPCode,
    [isPendingOTPCode, isVerifyingOTPCode],
  );

  const handleVerified = (data: any) => {
    const payload = data?.data || data;

    console.log('[LoginOtpVerificationSection] handleVerified -> data', data);
    console.log('[LoginOtpVerificationSection] handleVerified -> payload', payload);

    if (payload) {
      saveAuth(data);
    }

    toast.success('ورود با موفقیت انجام شد');
    navigate('/home', { replace: true });
  };

  const handleSubmit = (code: string) => {
    if (isPending) return;

    verifyOTPCode(
      { phone_number: phoneNumber, code, purpose: 'login' },
      {
        onSuccess: handleVerified,
      },
    );
  };

  // Send OTP Code when component is present
  useEffect(() => {
    requestOTPCode(
      { phone_number: phoneNumber, purpose: 'login' },
      {
        onSuccess: () => toast.success(`کد با موفقیت به شماره ${phoneNumber} ارسال شد`),
        onError: (error) => toast.error(error.message),
      },
    );
  }, []);

  return <OtpSection handleSubmit={handleSubmit} isPending={isPending} purpose="login" />;
}
