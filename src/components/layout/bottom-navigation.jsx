import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';

const navItems = [
  { label: 'کیف پول', icon: <AccountBalanceWalletRoundedIcon />, path: '/wallet' },
  { label: 'لیدربرد', icon: <EmojiEventsRoundedIcon />, path: '/leaderboard' },
  { label: '', icon: <HomeRoundedIcon sx={{ fontSize: 32 }} />, path: '/home', isMain: true },
  { label: 'مأموریت‌ها', icon: <RocketLaunchRoundedIcon />, path: '/missions' },
  { label: 'حساب کاربری', icon: <PersonRoundedIcon />, path: '/user/profile' },
];

const MDBottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const value = useMemo(
    () => location.pathname,
    [location.pathname],
  );

  return (
    <Paper
      elevation={0}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: 'transparent',
        pointerEvents: 'none', // Allow clicks to pass through wrapper
      }}
    >
      <Box
        sx={{
          maxWidth: 'sm',
          mx: 'auto',
          pointerEvents: 'auto', // Re-enable clicks
          background: '#0D0F17',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(_event, newValue) => {
            if (newValue !== value) {
              navigate(newValue);
            }
          }}
          showLabels
          sx={{
            bgcolor: 'transparent',
            height: 70,
            '& .MuiBottomNavigationAction-root': {
              color: '#6B7280',
              minWidth: 'auto',
              padding: '6px 0',
              transition: 'all 0.2s ease',
              '&.Mui-selected': {
                color: '#FF0055', // Pink/magenta for selected items
                fontWeight: 700,
              },
              '&:hover': {
                fontWeight: 600,
              },
            },
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              value={item.path}
              label={item.label}
              icon={
                item.isMain ? (
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      background: 'linear-gradient(135deg, #FF0055 0%, #E91E63 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      mt: -4,
                      boxShadow: '0 8px 16px rgba(233, 30, 99, 0.5), 0 4px 8px rgba(233, 30, 99, 0.3)',
                      border: '3px solid #0D0F17',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <HomeRoundedIcon sx={{ fontSize: 28 }} />
                  </Box>
                ) : (
                  item.icon
                )
              }
              sx={{
                ...(item.isMain && {
                  overflow: 'visible',
                }),
              }}
            />
          ))}
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default MDBottomNavigation;
