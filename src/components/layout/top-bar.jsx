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

const TopBar = () => (
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
        variant="h5"
        component="div"
        sx={{
          fontWeight: 900,
          letterSpacing: 1,
          background: 'linear-gradient(90deg, #FF7EDB 0%, #FFFFFF 100%)',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          zIndex: 2,
        }}
      >
        GG10
      </Typography>

      {/* Balance Button - Centered Absolutely */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          pointerEvents: 'none', // Allow clicks to pass through the container
        }}
      >
        <Button
          variant="contained"
          color="surface"
          startIcon={<ArrowBackIosNewRoundedIcon sx={{ fontSize: 10 }} />}
          endIcon={<AccountBalanceWalletRoundedIcon sx={{ color: '#FF0055' }} />}
          sx={{
            pointerEvents: 'auto', // Re-enable clicks on the button
            bgcolor: '#151826', // Slightly lighter than background
            color: '#E0E0E0',
            borderRadius: 0.5, // Perfect rectangle
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
          افزایش موجودی
        </Button>
      </Box>

      {/* Notification Icon */}
      <IconButton color="inherit" sx={{ zIndex: 2 }}>
        <Badge badgeContent={2} color="error" sx={{ '& .MuiBadge-badge': { bgcolor: '#FF0055', color: 'white' } }}>
          <NotificationsNoneRoundedIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default TopBar;
