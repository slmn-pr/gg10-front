import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import OtpInput from '../components/OtpInput';
import useAuthorizeOTPCode from '../hooks/useAuthorizeOTPCode';
import ButtonLoading from '@/components/form/ButtonLoading';
import { useStep } from '..';
import { STEP_TYPES } from '../const';

export default function OtpVerificationSection({ phoneNumber = '09123456789' }) {
  const [otpValue, setOtpValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const { setStep } = useStep();
  const { mutateAsync: authorizeOTPCode, isPending } = useAuthorizeOTPCode();

  const onAuthorizeOTPCode = async (otpCode) => {
    if (isPending) return;

    const isAuthorized = await authorizeOTPCode(otpCode);
    if (isAuthorized) {
      setIsValid(true);
      setIsError(false);
    } else {
      setIsValid(false);
      setIsError(true);
    }
  };

  const onNextStep = () => {
    if (isPending || !isValid || isError) return;
    setStep(STEP_TYPES.GAME_NAME);
  };

  const isDisabled = otpValue.length !== 5;

  return (
    <>
      {/* LOgo */}
      <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
        <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
      </Box>

      {/* Otp section */}
      <Stack mt="60px">
        <Typography component="p" variant="title3">
          کد تایید را وارد کنید
        </Typography>

        {/* Change number  */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '8px',
          }}
        >
          <Button variant="text" color="primary" size="small">
            <Typography variant="sub1" component="p" color="primary.main">
              تغییر شماره
            </Typography>
          </Button>

          <Typography variant="sub1" component="p">
            کد 5 رقمی به شماره {phoneNumber} ارسال شد
          </Typography>
        </Box>

        {/* Otp input */}
        <Box>
          <OtpInput
            value={otpValue}
            onChange={(value) => {
              setOtpValue(value);
              // Reset validation states when user types
              if (isValid || isError) {
                setIsValid(false);
                setIsError(false);
              }
            }}
            onComplete={(value) => {
              console.log('OTP completed:', value);
              onAuthorizeOTPCode(value);
            }}
            isValid={isValid}
            isError={isError}
          />
        </Box>

        {/* Countdown */}
        <Box sx={{ mt: '10px' }}>
          <Typography variant="sub3" component="p" color="custom.grey0">
            01:30 تا درخواست مجدد ارسال کد
          </Typography>
        </Box>

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
