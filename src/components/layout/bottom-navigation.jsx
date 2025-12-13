import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Paper,
  IconButton,
  Typography,
  useTheme,
  alpha,
  Button,
  Stack,
} from '@mui/material';

import HomeIcon from '../icons/navigation/HomeIcon';
import MissionsIcon from '../icons/navigation/MissionsIcon';
import AccountIcon from '../icons/navigation/AccountIcon';
import LeaderBoard from '../icons/navigation/LeaderBoard';
import WalletIcon from '../icons/navigation/WalletIcon';

const MDBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const activePath = useMemo(() => location.pathname, [location.pathname]);

  const navItems = [
    {
      label: 'کیف پول',
      icon: (active) => (
        <WalletIcon
          color={active ? theme.palette.primary.main : theme.palette.custom.iconsWhite}
        />
      ),
      path: '/wallet',
    },
    {
      label: 'لیدربرد',
      icon: (active) => (
        <LeaderBoard
          color={active ? theme.palette.primary.main : theme.palette.custom.iconsWhite}
        />
      ),
      path: '/leaderboard',
    },
    {
      label: '',
      isMain: true,
      icon: () => <HomeIcon color={theme.palette.custom.whiteOnBg1} />,
      path: '/home',
    },
    {
      label: 'مأموریت‌ها',
      icon: (active) => (
        <MissionsIcon
          color={active ? theme.palette.primary.main : theme.palette.custom.iconsWhite}
        />
      ),
      path: '/missions',
    },
    {
      label: 'حساب کاربری',
      icon: (active) => (
        <AccountIcon
          color={active ? theme.palette.primary.main : theme.palette.custom.iconsWhite}
        />
      ),
      path: '/user/profile',
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: 440, // استفاده از maxWidth برای انعطاف بیشتر
        width: '100%', // پر کردن عرض در دستگاه‌های کوچک
        height: '70px', // افزایش ارتفاع برای جای دادن دکمه بزرگتر
        bgcolor: 'custom.bg1',
        zIndex: 1000,
        // این استایل‌ها به Paper اضافه می‌شود تا شبیه نوار تیره شود
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // opacity: 0.9, // اگر می‌خواهید نوار کمی شفاف باشد
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around" // توزیع مساوی آیتم‌ها
        spacing={0} // حذف spacing پیش‌فرض
        sx={{
          pointerEvents: 'auto', // فعال کردن قابلیت کلیک
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        {navItems.map((item) =>
          item.isMain ? (
            // ---------- MAIN ACTION BUTTON ----------
            <Box
              key={item.path}
              sx={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '0px',
              }}
            >
              <IconButton
                onClick={() => navigate(item.path)}
                sx={{
                  transform: 'translateY(-50%)',
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: theme.palette.primary.main,
                  boxShadow: `0 8px 16px ${alpha(
                    theme.palette.primary.main,
                    0.3,
                  )}, 0 4px 8px ${alpha(theme.palette.primary.main, 0.7)}`,

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '30px',
                    transform: 'translateY(-50%)',
                    left: 'calc(100% + 8px)',
                    width: '200px',
                    height: '1px',
                    bgcolor: theme.palette.custom.bottomNavigationGreyLine,
                  },

                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '30px',
                    transform: 'translateY(-50%)',
                    right: 'calc(100% + 8px)',
                    width: '160px',
                    height: '1px',
                    bgcolor: theme.palette.custom.bottomNavigationGreyLine,
                  },
                  '&:active': { bgcolor: theme.palette.primary.main },
                  '&:hover': { bgcolor: theme.palette.primary.main },
                }}
              >
                {item.icon(activePath === item.path)}
              </IconButton>
            </Box>
          ) : (
            // ---------- NORMAL NAV ITEMS (Button) ----------
            <Button
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                color:
                  activePath === item.path
                    ? theme.palette.primary.main
                    : theme.palette.custom.iconsWhite,
                flexDirection: 'column',
                padding: '8px 4px',
                minWidth: 0,
                height: '100%',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              {item.icon(activePath === item.path)}

              <Typography
                variant="caption"
                sx={{
                  color:
                    activePath === item.path
                      ? theme.palette.primary.main
                      : theme.palette.custom.whiteOnBg1,
                  mt: 0.5,
                  fontWeight: activePath === item.path ? 700 : 400,
                  fontSize: 12,
                }}
              >
                {item.label}
              </Typography>
            </Button>
          ),
        )}
      </Stack>
    </Paper>
  );
};

export default MDBottomNavigation;
