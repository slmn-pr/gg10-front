import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import OtpInput from '../components/OtpInput';
import { useState } from 'react';
import OtpSection from './OtpSection';

export default function LoginOtpVerificationSection({ phoneNumber = '09123456789' }) {
  const [otpValue, setOtpValue] = useState('');
  const [isValid, setIsValid] = useState(false);
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
          <IconButton>
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
            onComplete={() => {
              console.log('OTP completed');
            }}
          />

          {/* Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '252px', height: '40px', mx: 'auto', mt: '100px' }}
            // disabled={isDisabled}
          >
            <Typography variant="button1" component="p" color="white">
              تایید و ادامه
            </Typography>
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
