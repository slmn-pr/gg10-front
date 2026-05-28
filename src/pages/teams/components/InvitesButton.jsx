import ChevronBackward from '@/components/icons/ChevronBackward';
import NotificationsIcon from '@/components/icons/Notifications';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InvitesButtonIcon({ count }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: '999px',
        minWidth: 20,
        height: 20,
        px: 0.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="caption2" color="white">
        {count}
      </Typography>
    </Box>
  );
}

export default function InvitesButton({ count = 4 }) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => navigate('/teams/invites')}
      sx={{
        px: 0,
        py: 0.75,
        color: 'custom.white',
        '&:hover': { bgcolor: 'transparent' },
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        dir="rtl"
      >
        <ChevronBackward color="white" />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="sub1" color="custom.white">
            دعوت نامه ها
          </Typography>
          <InvitesButtonIcon count={count} />
          <NotificationsIcon color={theme.palette.custom.white} />
        </Box>
      </Box>
    </Button>
  );
}
