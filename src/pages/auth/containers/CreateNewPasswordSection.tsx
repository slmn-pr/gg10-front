import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import PasswordInput from '../components/PasswordInput';
import { useMemo, useState } from 'react';
import SupportFooter from '../components/SupportFooter';

export default function CreateNewPasswordSection() {
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');

  const isMatchPasswords = useMemo(
    () => newPassword === repeatNewPassword,
    [newPassword, repeatNewPassword],
  );

  const is8Digit = useMemo(() => isMatchPasswords && newPassword.length >= 8, []);

  // TODO: Add check password contains -> numbers and alphabet chars
  // ...

  // TODO: Add check password contains -> Capital chars and small chars
  // ...

  // TODO: Implement this calced value using new password checks 👆
  const buttonDisabled = useMemo(
    () => isMatchPasswords && is8Digit,
    [isMatchPasswords, is8Digit],
  );

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

          <BackwardButton>بازیابی رمز عبور</BackwardButton>
        </Box>

        {/* Logo */}

        <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center', mb: '44px' }}>
          <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
        </Box>

        <Stack spacing="32px">
          <Box>
            <InputLabel dir="rtl">
              <Typography variant="title3" color="white">
                رمز عبور جدید را تعیین کنید{' '}
              </Typography>
            </InputLabel>
            <PasswordInput
              hasError={!isMatchPasswords}
              password={newPassword}
              setPassword={setNewPassword}
            />
          </Box>
          <Box>
            <InputLabel dir="rtl">
              <Typography variant="title3" color="white">
                رمز عبور جدید را تکرار کنید
              </Typography>
            </InputLabel>
            <PasswordInput
              hasError={!isMatchPasswords}
              password={repeatNewPassword}
              setPassword={setRepeatNewPassword}
            />
          </Box>

          <Typography variant="caption1" color="custom.errorOnPrimaryBg" dir="rtl">
            {!isMatchPasswords && ' رمز عبور و تکرار آن باید یکسان باشند'}
          </Typography>
        </Stack>

        {/* Hint */}
        <Stack spacing={0.5}>
          <Typography
            variant="caption1"
            color={is8Digit ? 'custom.grey0' : 'custom.errorOnPrimaryBg'}
          >
            حداقل 8 کاراکتر باشد
          </Typography>

          {/* TODO: Conntect the correct state to dynamic color -> `color` property */}
          <Typography
            variant="caption1"
            color={isMatchPasswords ? 'custom.grey0' : 'custom.errorOnPrimaryBg'}
          >
            شامل اعداد و حروف انگلیسی باشد
          </Typography>

          {/* TODO: Conntect the correct state to dynamic color -> `color` property */}
          <Typography
            variant="caption1"
            color={isMatchPasswords ? 'custom.grey0' : 'custom.errorOnPrimaryBg'}
          >
            شامل حروف بزرگ و کوچک باشد
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button variant="contained" disabled sx={{ width: '252px' }}>
            تایید و تغیر رمز عبور
          </Button>
        </Box>

        <SupportFooter />
      </Box>
    </Container>
  );
}
