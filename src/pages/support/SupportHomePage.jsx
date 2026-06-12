import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ChevronBackward from '@/components/icons/ChevronBackward';
import { Card } from '@/pages/user/pages/profile/shared/ui.jsx';
import SupportPageShell from './SupportPageShell.jsx';
import { supportRouteBase } from './utils.js';
import AccountIcon from '@/assets/icons/Bottom navbar icons/account.svg';
import LockIcon from '@/assets/icons/General icons/Lock.svg';
import NotificationIcon from '@/assets/icons/General icons/notifications.svg';
import ServerErrorIcon from '@/assets/icons/General icons/server error.svg';

export const SupportPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const base = supportRouteBase(location.pathname);

  const supportLinks = [
    {
      title: 'راهنمای حساب کاربری',
      subtitle: 'ویرایش نام، آواتار و اطلاعات حساب',
      iconSrc: AccountIcon,
      path: `${base}/account-guide`,
    },
    {
      title: 'مشکل ورود یا رمز عبور',
      subtitle: 'بازیابی دسترسی و رمز ورود',
      iconSrc: LockIcon,
      path: `${base}/login-issues`,
    },
    {
      title: 'امنیت حساب',
      subtitle: 'گزارش ورود مشکوک یا مشکل امنیتی',
      iconSrc: NotificationIcon,
      path: `${base}/security-help`,
    },
    {
      title: 'ارسال تیکت پشتیبانی',
      subtitle: 'ثبت درخواست برای تیم پشتیبانی',
      iconSrc: ServerErrorIcon,
      path: `${base}/tickets/no-ticket`,
    },
  ];

  return (
    <SupportPageShell title="پشتیبانی">
      <Card
        sx={{
          p: 2,
          background:
            'linear-gradient(135deg, rgba(228,11,90,0.20) 0%, rgba(18,18,18,1) 60%)',
        }}
      >
        <Stack alignItems="center" gap={1.5}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '14px',
              bgcolor: 'rgba(228,11,90,0.16)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Box component="img" src={ServerErrorIcon} alt="" sx={{ width: 28, height: 28 }} />
          </Box>
          <Typography variant="title3" color="custom.white">
            چطور می‌توانیم کمک کنیم؟
          </Typography>
          <Typography variant="caption1" color="custom.grey0" textAlign="center">
            سوالات و ابهامات حساب کاربری، لابی‌ها، پرداخت و جوایز را از این بخش پیگیری کنید.
          </Typography>
        </Stack>
      </Card>

      <Stack gap={1.5}>
        {supportLinks.map(({ title, subtitle, iconSrc, path }) => (
          <Button
            dir="ltr"
            fullWidth
            key={title}
            onClick={() => navigate(path)}
            sx={{
              height: 74,
              bgcolor: 'custom.bg2',
              borderRadius: '8px',
              px: 2,
              color: 'custom.white',
              justifyContent: 'space-between',
              '&:hover': { bgcolor: 'custom.grey6' },
            }}
          >
            <ChevronBackward color={theme.palette.custom.white} />
            <Stack alignItems="flex-end" sx={{ minWidth: 0, flex: 1, mx: 1.2 }}>
              <Typography variant="title3" color="custom.white" noWrap>
                {title}
              </Typography>
              <Typography variant="caption1" color="custom.grey1" noWrap>
                {subtitle}
              </Typography>
            </Stack>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                bgcolor: 'rgba(228,11,90,0.12)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <Box component="img" src={iconSrc} alt="" sx={{ width: 22, height: 22 }} />
            </Box>
          </Button>
        ))}
      </Stack>
    </SupportPageShell>
  );
};
