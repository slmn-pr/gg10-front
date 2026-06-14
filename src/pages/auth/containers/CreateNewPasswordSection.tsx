import CloseIcon from '@/components/icons/general/CloseIcon';
import BackwardButton from '@/components/layout/BackwardButton';
import { Box, Container, IconButton, InputLabel } from '@mui/material';
import PasswordInput from '../components/PasswordInput';
import { useState } from 'react';

export default function CreateNewPasswordSection() {
  const [newPassword, setNewPassword] = useState('');
  const [repeatNewPassword, setRepeatNewPassword] = useState('');
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

        <Box sx={{ mt: '100px', display: 'flex', justifyContent: 'center' }}>
          <img src="/images/logo.png" alt="logo" style={{ height: '38px' }} />
        </Box>

        <Box>
          <InputLabel>رمز عبور جدید را تعیین کنید </InputLabel>
          <PasswordInput password={newPassword} setPassword={setNewPassword} />
        </Box>

        <Box>
          <InputLabel>رمز عبور جدید را تکرار کنید </InputLabel>
          <PasswordInput
            password={repeatNewPassword}
            setPassword={setRepeatNewPassword}
          />
        </Box>
      </Box>
    </Container>
  );
}
