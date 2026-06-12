import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ButtonLoading from '@/components/form/ButtonLoading';
import { useStep } from '..';
import { STEP_TYPES } from '../const';
import OtpSection from './OtpSection';
import useVerifyOTPCode from '../hooks/useVerifyOTPCode';

export default function OtpVerificationSection() {
  const [otpValue, setOtpValue] = useState('');
  const [isError, setIsError] = useState(false);

  const { setStep, phoneNumber } = useStep();
  const { mutate, isPending } = useVerifyOTPCode();

  const onNextStep = () => {
    if (isPending || otpValue.length !== 5) return;

    mutate(
      { phone_number: phoneNumber, code: otpValue, purpose: 'signup' },
      {
        onSuccess: () => {
          setIsError(false);
          setStep(STEP_TYPES.GAME_NAME);
        },
        onError: () => {
          setIsError(true);
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

  const isDisabled = otpValue.length !== 5 || isPending;

  return (
    <>
      {/* LOgo */}
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
          errorText="کد وارد شده صحیح نیست"
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
