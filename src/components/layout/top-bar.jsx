import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useTheme } from '@emotion/react';

export default function TopBar() {
  const theme = useTheme();
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: 'custom.bg1',
        pt: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 2, position: 'relative' }}>
        {/* Logo */}
        <Typography
          variant="title1"
          component="div"
          sx={{
            fontWeight: 900,
            letterSpacing: 1,
            zIndex: 2,
            fontSize: '26px',
            display: 'flex',
            alignItems: 'center',
            gap: 0.15,
            fontFamily: 'Russo One, sans-serif',
          }}
        >
          <span style={{ color: theme.palette.custom.primaryOnBg2 }}>GG</span>
          <span>10</span>
        </Typography>

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
            startIcon={<ArrowBackIosNewRoundedIcon width={20} height={20} />}
            endIcon={<AccountBalanceWalletRoundedIcon width={20} height={20} />}
            sx={{
              pointerEvents: 'auto', // Re-enable clicks on the button
              bgcolor: '#151826', // Slightly lighter than background
              color: '#E0E0E0',
              borderRadius: 2, // Perfect rectangle
              px: 2,
              py: 0.8,
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textTransform: 'none',
              border: '1px solid #2B2E40',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              '&:hover': {
                bgcolor: '#1E2130',
              },
            }}
          >
            <Typography variant="button2">افزایش موجودی</Typography>
          </Button>
        </Box>

        {/* Notification Icon */}
        <IconButton color="inherit" sx={{ zIndex: 2 }}>
          <Badge
            badgeContent={2}
            color="error"
            sx={{ '& .MuiBadge-badge': { bgcolor: '#FF0055', color: 'white' } }}
          >
            <NotificationsNoneRoundedIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
