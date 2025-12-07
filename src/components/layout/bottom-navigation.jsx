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
        width: 440,
        height: 72,
        bgcolor: 'custom.bg1',
        borderTop: `1px solid ${theme.palette.custom.bottomNavigationGreyLine}`,
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          pointerEvents: 'auto',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          position: 'relative',
          background: '#0D0F17',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {navItems.map((item) =>
          item.isMain ? (
            // ---------- MAIN ACTION BUTTON ----------
            <IconButton
              key={item.path}
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

                '&:active': {
                  bgcolor: theme.palette.primary.main,
                },
                '&:hover': {
                  bgcolor: theme.palette.primary.main,
                },

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '25px',
                  transform: 'translateY(-50%)',
                  left: 'calc(100% + 10px)',
                  width: '150px',
                  height: '1px',
                  bgcolor: theme.palette.primary.main,
                },

                '&::befor': {
                  content: '""',
                  position: 'absolute',
                  top: '25px',
                  transform: 'translateY(-50%)',
                  left: 'calc(-100% - 10px)',
                  width: '150px',
                  height: '10px',
                  bgcolor: theme.palette.primary.main,
                },
              }}
            >
              {item.icon(activePath === item.path)}
            </IconButton>
          ) : (
            // ---------- NORMAL NAV ITEMS ----------

            <Button
              onClick={() => navigate(item.path)}
              sx={{
                color:
                  activePath === item.path
                    ? theme.palette.primary.main
                    : theme.palette.custom.iconsWhite,
                flexDirection: 'column',
                padding: 0,
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
      </Box>
    </Paper>
  );
};

export default MDBottomNavigation;
