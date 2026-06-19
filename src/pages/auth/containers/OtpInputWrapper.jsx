import { Box, Button, Stack, Typography } from '@mui/material';
import OtpInput from '../components/OtpInput';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { STEP_TYPES } from '../const';
import { useStep } from '../context';
import Countdown from 'react-countdown';
import CountDownView from '../components/CountDownView';

export default function OTPInputWrapper({
  phoneNumber = '09123456789',
  value,
  onChange,
  onComplete,
  isValid = false,
  isError = false,
  errorText,
  resendAvailableAt,
}) {
  const [internalOtpValue, setInternalOtpValue] = useState('');
  const { setStep } = useStep();
  const otpValue = value ?? internalOtpValue;

  const handleChangeNumber = useCallback(() => {
    setStep(STEP_TYPES.PHONE_NUMBER);
  }, [setStep]);

  const handleChange = useCallback(
    (newValue) => {
      if (value === undefined) {
        setInternalOtpValue(newValue);
      }

      onChange?.(newValue);
    },
    [onChange, value],
  );

  // 1:30 minute after now
  const countdownValue = useMemo(() => {
    // return resendAvailableAt ? new Date(resendAvailableAt) : Date.now() + 1_000 * 90;
    return Date.now() + 1_000 * 90;
  }, [resendAvailableAt]);

  useEffect(() => {
    console.log('[OTPInputWrapper] countdownValue changed:', countdownValue);
  }, [countdownValue]);

  return (
    <Stack>
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
        <Button variant="text" color="primary" size="small" onClick={handleChangeNumber}>
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
          onChange={handleChange}
          onComplete={onComplete}
          isValid={isValid}
          isError={isError}
        />
      </Box>

      {isError && errorText && (
        <Typography
          variant="sub2"
          component="p"
          color="custom.errorOnPrimaryBg"
          sx={{ mt: '4px', mb: 0 }}
        >
          {errorText}
        </Typography>
      )}

      {/* Countdown */}
      <Box sx={{ mt: '4px' }}>
        <Countdown
          zeroPadTime={2}
          key={countdownValue}
          renderer={CountDownView}
          date={countdownValue}
          autoStart
        />
      </Box>
    </Stack>
  );
}
