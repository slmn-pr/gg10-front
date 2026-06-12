import CloseIcon from '@/components/icons/general/CloseIcon';
import VisibilyOffIcon from '@/components/icons/VisibilyOffIcon';
import VisibilyOnIcon from '@/components/icons/VisibilyOnIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import SupportFooter from '../components/SupportFooter';
import KeyIcon from '@/components/icons/KeyIcon';
import ChevronBackward from '@/components/icons/ChevronBackward';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import useRequestOTPCode from '../hooks/useRequestOTPCode';
import toast from 'react-hot-toast';
import ButtonLoading from '@/components/form/ButtonLoading';

export default function PasswordLoginSection() {
  const theme = useTheme();
  const { phoneNumber, setStep } = useStep();
  const { mutate, isPending } = useRequestOTPCode();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleOtpLogin = () => {
    mutate(
      { phoneNumber, purpose: 'login' },
      {
        onSuccess: () => setStep(STEP_TYPES.LOGIN_OTP_VERIFICATION),
        onError: (error) => toast.error(error.message),
      },
    );
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        p: 0,
        minHeight: '100vh',
        maxWidth: 'sm',
        mx: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          px: { xs: '16px' },
          pt: { xs: '16px' },
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ direction: 'rtl' }}
        >
          <BackwardButton>ورود به حساب کاربری</BackwardButton>

          <IconButton onClick={() => setStep(STEP_TYPES.PHONE_NUMBER)}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {/* Logo */}
        <Box sx={{ mt: '180px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
        </Box>

        {/* Password input */}
        <Box>
          {/* Label */}
          <Stack
            mt="60px"
            mb={0.5}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ direction: 'rtl' }}
          >
            <Typography variant="title3">رمز عبور را وارد کنید</Typography>

            <Link variant="sub2">فراموشی رمز عبور</Link>
          </Stack>

          {/* Input */}
          <TextField
            type={isVisible ? 'text' : 'password'}
            placeholder="رمز عبور"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setShowPasswordError(false);
            }}
            error={showPasswordError}
            sx={{ direction: 'rtl' }}
            slotProps={{
              input: {
                endAdornment: (
                  <IconButton onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <VisibilyOffIcon /> : <VisibilyOnIcon />}
                  </IconButton>
                ),
              },
            }}
          />

          {/* Error message */}
          <Typography
            variant="sub2"
            color="custom.errorOnPrimaryBg"
            sx={{ mt: 0.5, visibility: showPasswordError ? 'visible' : 'hidden' }}
            component="p"
            textAlign="right"
          >
            رمز عبور وارد شده صحیح نیست
          </Typography>
        </Box>

        {/* Buttons  */}
        <Stack gap={1} mt="100px" sx={{ width: '252px', mx: 'auto' }}>
          {/* Login using password */}
          <Button
            variant="contained"
            color="primary"
            disabled={!password || isPending}
            onClick={() => setShowPasswordError(true)}
          >
            <Typography variant="button1">تایید و ورود به حساب</Typography>
          </Button>

          {/* Login using OTP */}
          {/* Click on this get to OTP Verifications */}
          <Button variant="outlined" color="white" onClick={handleOtpLogin} disabled={isPending}>
            <Stack direction="row" alignItems="center" gap={1}>
              {isPending ? (
                <ButtonLoading />
              ) : (
                <>
                  <KeyIcon />
                  <Typography variant="button1">ورود با کد پیامکی</Typography>
                  <ChevronBackward />
                </>
              )}
            </Stack>
          </Button>
        </Stack>
      </Box>

      <SupportFooter />
    </Container>
  );
}
