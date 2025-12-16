import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import WalletIcon from '../icons/WalletIcon';
import ChevronBackwardIcon from '../icons/ChevronBackward';
import NotificationsIcon from '../icons/Notifications';
import Logo from '../icons/Logo';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        maxWidth: 'sm',
        mx: 'auto',
        bgcolor: 'custom.bg1',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 'sm',
          width: '100%',
          justifyContent: 'space-between',
          px: 2,
          position: 'sticky',
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        {/* Logo */}
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} sx={{ p: 0 }}>
          <Logo />
        </Button>

        {/* Balance Button - Centered Absolutely */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            color="surface"
            sx={{
              pointerEvents: 'auto', // Re-enable clicks on the button
              bgcolor: '#151826', // Slightly lighter than background
              color: '#E0E0E0',
              borderRadius: 2, // Perfect rectangle
              px: '18px',
              py: 1,
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: theme.palette.custom.bg2,
            }}
          >
            <WalletIcon color={theme.palette.custom.tint4} />
            <Typography variant="button2" sx={{ mx: 0.5 }}>
              افزایش موجودی
            </Typography>
            <ChevronBackwardIcon color={theme.palette.custom.whiteOnBg2} />
          </Button>
        </Box>

        {/* Notification Icon */}
        {/* <IconButton color="inherit" sx={{ zIndex: 2 }} size='small'> */}
        <IconButton
          size="small"
          sx={{ width: 40, height: 40 }}
          onClick={() => navigate('/notifications')}
        >
          <Badge
            variant="standard"
            badgeContent={'+99'}
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                bgcolor: '#FF0055',
                color: 'white',
                fontSize: theme.typography.caption2.fontSize,
              },
            }}
          >
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {/* </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}
