import { useEffect, useMemo, useState } from 'react';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import { useStep } from '../context';
import useAuthStore from '@/store/auth-store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import useSaveUserAuth from '../hooks/useSaveUserAuth';
import OtpSection from './OTPSection';
import { Box, Container, IconButton } from '@mui/material';
import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import SupportFooter from '../components/SupportFooter';
import { STEP_TYPES } from '../const';

export default function LoginOtpVerificationSection() {
  const { setAuth } = useAuthStore();
  const saveAuth = useSaveUserAuth(setAuth);

  const { mutate: requestOTPCode, isPending: isPendingOTPCode } = useRequestOTPCode();
  const { mutate: verifyOTPCode, isPending: isVerifyingOTPCode } = useVerifyOTPCode();
  const navigate = useNavigate();

  const [hasError, setHasError] = useState(false);

  const { phoneNumber, setStep } = useStep();

  const isPending = useMemo(
    () => isPendingOTPCode || isVerifyingOTPCode,
    [isPendingOTPCode, isVerifyingOTPCode],
  );

  const handleVerified = (data: any) => {
    const payload = data?.data || data;

    console.log('[LoginOtpVerificationSection] handleVerified -> data', data);
    console.log('[LoginOtpVerificationSection] handleVerified -> payload', payload);

    toast.success('ورود با موفقیت انجام شد');

    if (data?.requires_profile) {
      // Navigate to set name section
      setStep(STEP_TYPES.GAME_NAME);
    } else {
      if (payload) {
        saveAuth(data);
      }
      navigate('/home', { replace: true });
    }
  };

  const handleSubmit = (code: string) => {
    if (isPending) return;

    verifyOTPCode(
      { phone_number: phoneNumber, code, purpose: 'login' },
      {
        onSuccess: handleVerified,
        onError: (error) => {
          console.error('[LoginOtpVerificationSection] handleSubmit, error', error);
          setHasError(true);
        },
      },
    );
  };

  // Send OTP Code when component is present
  // useEffect(() => {
  //   requestOTPCode(
  //     { phone_number: phoneNumber, purpose: 'login' },
  //     {
  //       onSuccess: () => toast.success(`کد با موفقیت به شماره ${phoneNumber} ارسال شد`),
  //       onError: (error) => toast.error(error.message),
  //     },
  //   );
  // }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        p: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
        <BackwardButton>ورود به حساب کاربری</BackwardButton>
      </Box>
      <OtpSection
        hasError={hasError}
        handleSubmit={handleSubmit}
        isPending={isPending}
        purpose="login"
      />

      <SupportFooter />
    </Container>
  );
}
