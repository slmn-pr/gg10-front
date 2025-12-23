import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Typography, useTheme, alpha, Stack } from '@mui/material';

import HomeIcon from '../icons/navigation/HomeIcon';
import MissionsIcon from '../icons/navigation/MissionsIcon';
import AccountIcon from '../icons/navigation/AccountIcon';
import LeaderBoard from '../icons/navigation/LeaderBoard';
import WalletIcon from '../icons/navigation/WalletIcon';
import BottomNavigationItem from './BottomNavigationItem';

const BottomNav = () => {
  const location = useLocation();
  const theme = useTheme();

  const activePath = useMemo(() => location.pathname, [location.pathname]);

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
        height: '60px', // افزایش ارتفاع برای جای دادن دکمه بزرگتر
        bgcolor: 'custom.bg1',
        borderRadius: 0,
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
        justifyContent="space-between"
        spacing={0}
        sx={{
          px: '16px',
          pointerEvents: 'auto',
          width: '100%',
          height: '100%',
          position: 'relative',
          borderRadius: 0,
        }}
      >
        {/* Wallet */}
        <BottomNavigationItem path="/wallet" active={activePath === '/wallet'}>
          <WalletIcon
            color={
              activePath === '/wallet'
                ? theme.palette.primary.main
                : theme.palette.custom.iconsWhite
            }
          />
          <Typography variant="sub2" color={theme.palette.custom.whiteOnBg1}>
            کیف پول
          </Typography>
        </BottomNavigationItem>

        {/* Leaderboard */}
        <BottomNavigationItem
          path="/leaderboard"
          active={activePath === '/leaderboard'}
          sx={{
            marginLeft: '24px',
          }}
        >
          <LeaderBoard
            color={
              activePath === '/leaderboard'
                ? theme.palette.primary.main
                : theme.palette.custom.iconsWhite
            }
          />
          <Typography variant="sub2" color={theme.palette.custom.whiteOnBg1}>
            لیدربرد
          </Typography>
        </BottomNavigationItem>

        {/* Home */}
        <BottomNavigationItem
          path="/home"
          active={activePath === '/home'}
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: '30px',
            transform: 'translate(-40px)',
            // transform: 'translateY(-50%)',
            width: 60,
            height: 60,
            borderRadius: '50%',
            bgcolor: theme.palette.primary.main,
            boxShadow: `0 8px 16px ${alpha(
              theme.palette.primary.main,
              0.3,
            )}, 0 4px 8px ${alpha(theme.palette.primary.main, 0.7)}`,

            '&:active': {
              bgcolor: theme.palette.primary.main,
            },

            '&:hover': {
              bgcolor: theme.palette.primary.main,
            },

            '&::after': {
              content: '""',
              position: 'absolute',
              top: '30px',
              transform: 'translateY(-50%)',
              left: 'calc(100% + 8px)',
              width: '190px',
              height: '1px',
              bgcolor: theme.palette.custom.bottomNavigationGreyLine,
            },

            '&::before': {
              content: '""',
              position: 'absolute',
              top: '30px',
              transform: 'translateY(-50%)',
              right: 'calc(100% + 8px)',
              width: '170px',
              height: '1px',
              bgcolor: theme.palette.custom.bottomNavigationGreyLine,
            },
          }}
        >
          <HomeIcon color={theme.palette.custom.whiteOnBg1} />
        </BottomNavigationItem>

        {/* Fake */}
        <Box sx={{ width: '60px', height: '60px', backgroundColor: 'transparent' }} />

        {/* Missions */}
        <BottomNavigationItem path="/missions" active={activePath === '/missions'}>
          <MissionsIcon color={theme.palette.custom.whiteOnBg1} />
          <Typography variant="sub2" color={theme.palette.custom.whiteOnBg1}>
            مأموریت‌ها
          </Typography>
        </BottomNavigationItem>

        {/* User Profile */}
        <BottomNavigationItem
          path="/user/profile"
          active={activePath === '/user/profile'}
        >
          <AccountIcon color={theme.palette.custom.whiteOnBg1} />
          <Typography variant="sub2" color={theme.palette.custom.whiteOnBg1}>
            حساب کاربری
          </Typography>
        </BottomNavigationItem>
      </Stack>
    </Paper>
  );
};

export default BottomNav;
