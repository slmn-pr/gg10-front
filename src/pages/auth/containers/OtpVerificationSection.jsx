import { useMemo, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import ButtonLoading from '@/components/form/ButtonLoading';
import OtpSection from './OtpSection';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';
import toast from 'react-hot-toast';

export default function OtpVerificationSection() {
  const [otpValue, setOtpValue] = useState('');
  const [isError, setIsError] = useState(false);

  const { setStep, phoneNumber } = useStep();
  const { mutate, isPending } = useVerifyOTPCode();

  const isDisabled = useMemo(
    () => otpValue.length !== 5 || isPending,
    [otpValue, isPending],
  );

  // Handle send OTP code to verify
  const onNextStep = () => {
    if (isDisabled) return;

    mutate(
      { phone_number: phoneNumber, code: otpValue, purpose: 'register' },
      {
        onSuccess: (data) => {
          console.log('[OtpVerificationSection] mutate -> data', data);

          setIsError(false);
          setStep(STEP_TYPES.GAME_NAME);
        },
        onError: (error) => {
          setIsError(true);
          toast.error('کد وارد شده صحیح نیست!');
        },
      },
    );
  };

  const handleOtpChange = (value) => {
    setOtpValue(value);
    if (isError) {
      setIsError(false);
    }
  };

  return (
    <>
      {/* Logo */}
      <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
        <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
      </Box>

      {/* Otp section */}
      <Stack mt="60px">
        {/* Otp input */}
        <OtpSection
          phoneNumber={phoneNumber}
          value={otpValue}
          onChange={handleOtpChange}
          isError={isError}
          errorText="کد تایید صحیح نیست. لطفا دوباره تلاش کنید"
        />

        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ width: '252px', height: '40px', mx: 'auto', mt: '100px' }}
          disabled={isDisabled}
          onClick={onNextStep}
        >
          {!isPending ? (
            <Typography variant="button1" component="p" color="white">
              تایید و ادامه
            </Typography>
          ) : (
            <ButtonLoading />
          )}
        </Button>
      </Stack>
    </>
  );
}
