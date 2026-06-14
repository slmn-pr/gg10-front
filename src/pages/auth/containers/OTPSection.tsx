import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import OTPInputWrapper from './OtpInputWrapper';
import ButtonLoading from '@/components/form/ButtonLoading';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import { useState } from 'react';

interface OTPSectionProps {
  isPending: boolean;
  handleSubmit: (otpCode: string) => void | any;
}

export default function OPTSection({ isPending, handleSubmit }: OTPSectionProps) {
  const { setStep, phoneNumber } = useStep();

  const [otpValue, setOtpValue] = useState('');
  const [isError, setIsError] = useState(false);

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
          <OTPInputWrapper
            onComplete={(otpCode: string) => handleSubmit(otpCode)}
            phoneNumber={phoneNumber}
            value={otpValue}
            onChange={(value: string) => {
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
            onClick={() => handleSubmit(otpValue)}
          >
            {isPending ? (
              <ButtonLoading />
            ) : (
              <Typography variant="button1" color="white">
                تایید و ادامه
              </Typography>
            )}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
