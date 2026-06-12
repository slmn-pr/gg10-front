import { Box, Button, Stack, Typography } from '@mui/material';
import OtpInput from '../components/OtpInput';
import { useCallback, useState } from 'react';
import { STEP_TYPES } from '../const';
import { useStep } from '../context';

export default function OtpSection({
  phoneNumber = '09123456789',
  value,
  onChange,
  onComplete,
  isValid = false,
  isError = false,
  errorText,
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
          sx={{ mt: '8px', textAlign: 'center' }}
        >
          {errorText}
        </Typography>
      )}

      {/* Countdown */}
      <Box sx={{ mt: '10px' }}>
        <Typography variant="sub3" component="p" color="custom.grey0">
          01:30 تا درخواست مجدد ارسال کد
        </Typography>
      </Box>
    </Stack>
  );
}
