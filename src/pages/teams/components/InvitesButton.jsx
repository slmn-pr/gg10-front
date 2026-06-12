import ChevronBackward from '@/components/icons/ChevronBackward';
import { Box, Button, Typography } from '@mui/material';

function Badge({ count }) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '999px',
        minWidth: 22,
        height: 22,
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

export default function InvitesButton({ count = 4, onClick }) {
  return (
    <Button
      variant="text"
      fullWidth
      onClick={onClick}
      sx={{
        px: 0,
        py: 0.75,
        color: 'custom.white',
        '&:hover': { bgcolor: 'transparent' },
      }}
    >
      <Box
        sx={{
          width: 'calc(100% - 32px)',
          height: 48,
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} dir="rtl">
          <Typography variant="sub1" color="custom.white">
            دعوت‌نامه‌ها
          </Typography>
          <Badge count={count} />
        </Box>

        <ChevronBackward color="white" />
      </Box>
    </Button>
  );
}
