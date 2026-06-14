import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import OtpSection from './OtpSection';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import ButtonLoading from '@/components/form/ButtonLoading';
import useAuthStore from '@/store/auth-store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import useSaveUserAuth from '../hooks/useSaveUserAuth';

export default function LoginOtpVerificationSection() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const saveAuth = useSaveUserAuth(setAuth);

  const { mutate: requestOTPCode, isPending: isPendingOTPCode } = useRequestOTPCode();
  const { mutate: verifyOTPCode, isPending: isVerifyingOTPCode } = useVerifyOTPCode();
  const navigate = useNavigate();

  const { phoneNumber, setStep } = useStep();
  const [otpValue, setOtpValue] = useState('');
  const [isError, setIsError] = useState(false);

  const isPending = useMemo(
    () => isPendingOTPCode || isVerifyingOTPCode,
    [isPendingOTPCode, isVerifyingOTPCode],
  );

  const handleVerified = (data) => {
    const payload = data?.data || data;

    console.log('[LoginOtpVerificationSection] handleVerified -> data', data);
    console.log('[LoginOtpVerificationSection] handleVerified -> payload', payload);

    if (payload) {
      saveAuth(data);
    }

    toast.success('ورود با موفقیت انجام شد');
    navigate('/home', { replace: true });
  };

  const handleSubmit = (code = otpValue) => {
    if (isPending) return;

    verifyOTPCode(
      { phone_number: phoneNumber, code, purpose: 'login' },
      {
        onSuccess: handleVerified,
        onError: () => {
          setIsError(true);
        },
      },
    );
  };

  // Send OTP Code when component is present
  useEffect(() => {
    requestOTPCode(
      { phoneNumber, purpose: 'login' },
      {
        onSuccess: () => toast.success(`کد با موفقیت به شماره ${phoneNumber} ارسال شد`),
        onError: (error) => toast.error(error.message),
      },
    );
  }, []);

  return (
    <Container maxWidth="sm" sx={{ p: 0 }}>
      <Box
        sx={{ px: { xs: '16px' }, pt: { xs: '16px' }, minHeight: '100vh' }}
        bgcolor="custom.secondaryBg"
      >
        {/* Header */}
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <IconButton onClick={() => setStep(STEP_TYPES.PHONE_NUMBER)}>
            <CloseIcon />
          </IconButton>

          <BackwardButton>ورود به حساب کاربری</BackwardButton>
        </Box>

        {/* Logo */}
        <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
        </Box>

        {/* Otp section */}
        <Stack mt="60px">
          <OtpSection
            phoneNumber={phoneNumber}
            value={otpValue}
            onChange={(value) => {
              setOtpValue(value);
              setIsError(false);
            }}
            isError={isError}
            errorText="کد وارد شده صحیح نیست"
          />

          {/* Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '252px', height: '40px', mx: 'auto', mt: '100px' }}
            disabled={isPending || otpValue.length !== 5}
            onClick={() => handleSubmit()}
          >
            {isPending ? (
              <ButtonLoading />
            ) : (
              <Typography variant="button1" component="p" color="white">
                تایید و ادامه
              </Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
