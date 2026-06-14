import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import SupportFooter from '../components/SupportFooter';
import KeyIcon from '@/components/icons/KeyIcon';
import ChevronBackward from '@/components/icons/ChevronBackward';
import { useStep } from '../context';
import { STEP_TYPES } from '../const';
import toast from 'react-hot-toast';
import ButtonLoading from '@/components/form/ButtonLoading';
import useLoginUsernamePassword from '../hooks/useLoginUsernamePassword';
import useAuthStore from '@/store/auth-store';
import useSaveUserAuth from '../hooks/useSaveUserAuth';
import PasswordInput from '../components/PasswordInput';

export default function PasswordLoginSection() {
  const theme = useTheme();

  const setAuth = useAuthStore((state) => state.setAuth);
  const saveAuth = useSaveUserAuth(setAuth);

  const { mutate, isPending } = useLoginUsernamePassword();

  const { phoneNumber, setStep } = useStep();

  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);

  // Navigate to LOgin using OTP code section
  const navigateToLoginUsingOTP = () => {
    if (!phoneNumber) {
      return toast.error('شماره صحیح نیست');
    }

    setStep(STEP_TYPES.LOGIN_OTP_VERIFICATION);
  };

  const handleSuccess = (data) => {
    toast.success('ورود با موفقیت انجام شد');
    saveAuth(data);
  };

  const handleLogin = () => {
    setShowPasswordError(false);
    mutate(
      { username: phoneNumber, password },
      {
        onSuccess: handleSuccess,
        onError: () => {
          setShowPasswordError(true);
          toast.error('ورود نا موفق بود');
        },
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
          <PasswordInput
            hasError={showPasswordError}
            password={password}
            setPassword={setPassword}
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
            disabled={!password}
            onClick={handleLogin}
          >
            <Typography variant="button1">تایید و ورود به حساب</Typography>
          </Button>

          {/* Login using OTP */}
          {/* Click on this get to OTP Verifications */}
          <Button
            variant="outlined"
            color="white"
            onClick={navigateToLoginUsingOTP}
            disabled={isPending}
          >
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
