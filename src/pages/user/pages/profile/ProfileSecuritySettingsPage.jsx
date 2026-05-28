import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { AccountInput, Card, Page, PrimaryButton, Toast } from './shared/ui.jsx';

export const ProfileSecuritySettingsPage = () => {
  const [isActivating, setIsActivating] = useState(false);
  const [toast, setToast] = useState('');

  const handleActivate = () => {
    setToast('رمز ورود با موفقیت فعال شد');
    setIsActivating(false);
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <Page title="تنظیمات امنیتی">
      {!isActivating ? (
        <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center', minHeight: 520, pt: 4 }}>
          <Card sx={{ width: '100%', p: 4, textAlign: 'center' }}>
            <KeyOutlinedIcon sx={{ color: 'custom.white', fontSize: 76, mb: 2, strokeWidth: 1.6 }} />
            <Typography variant="title2" color="custom.white">
              فعالسازی رمز ورود حساب کاربری
            </Typography>
            <Typography variant="body3" color="custom.white" mt={1}>
              جهت امنیت بیشتر حساب کاربری خود، برای ورود رمز تعیین کنید
            </Typography>
            <Button
              fullWidth
              onClick={() => setIsActivating(true)}
              sx={{
                mt: 3,
                height: 48,
                bgcolor: 'primary.main',
                color: 'custom.white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              فعالسازی
            </Button>
          </Card>
        </Box>
      ) : (
        <Stack gap={2}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack alignItems="flex-end">
                <Typography variant="title3" color="custom.white">
                  رمز ورود
                </Typography>
                <Typography variant="caption1" color="custom.grey1">
                  رمز ورود باید حداقل ۸ کاراکتر داشته باشد.
                </Typography>
              </Stack>
              <LockOutlinedIcon sx={{ color: 'primary.light', fontSize: 28 }} />
            </Stack>
          </Card>

          <Card sx={{ p: 2 }}>
            <Stack gap={1.5}>
              <AccountInput
                placeholder="رمز عبور"
                type="password"
                startIcon={<VisibilityOffOutlinedIcon sx={{ color: 'custom.grey1', mr: 1 }} />}
              />
              <AccountInput placeholder="تکرار رمز عبور" type="password" />
              <PrimaryButton onClick={handleActivate}>فعال‌سازی رمز عبور</PrimaryButton>
            </Stack>
          </Card>
        </Stack>
      )}
      <Toast message={toast} />
    </Page>
  );
};
