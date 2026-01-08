import { Box, Button, Stack, Typography } from '@mui/material';
import OtpInput from '../components/OtpInput';
import { useCallback, useState } from 'react';
import { useStep } from '..';
import { STEP_TYPES } from '../const';

export default function OtpSection({ phoneNumber = '09123456789', onComplete }) {
  const [otpValue, setOtpValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);

  const { setStep } = useStep();

  const handleChangeNumber = useCallback(() => {
    setStep(STEP_TYPES.PHONE_NUMBER);
  }, []);

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
          onChange={(value) => {
            setOtpValue(value);
            // Reset validation states when user types
            if (isValid || isError) {
              setIsValid(false);
              setIsError(false);
            }
          }}
          onComplete={onComplete}
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
    </Stack>
  );
}
