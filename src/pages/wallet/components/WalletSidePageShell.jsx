import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import ChevronBackward from '@/components/icons/ChevronBackward.jsx';

export const WalletSidePageShell = ({ children }) => (
  <Stack
    sx={{
      minHeight: 'calc(100vh - 56px)',
      bgcolor: 'custom.bg1',
      width: '100%',
      overflowX: 'hidden',
      pb: 10,
    }}
    alignItems="center"
  >
    {children}
    <BottomNav />
  </Stack>
);

export const WalletSidePageHeader = ({ title, subtitle, icon: Icon }) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: '100%',
        height: 84,
        px: 2,
        bgcolor: 'custom.bg1',
      }}
    >
      <Button
        onClick={() => navigate('/wallet')}
        sx={{ minWidth: 40, width: 40, height: 40, p: 0, color: 'custom.white' }}
      >
        <ChevronBackward color="#FFFFFF" />
      </Button>
      <Stack alignItems="flex-end" gap={0.25} sx={{ minWidth: 0 }}>
        <Typography variant="title3" color="custom.white">
          {title}
        </Typography>
        <Typography variant="caption2" color="custom.grey1" noWrap>
          {subtitle}
        </Typography>
      </Stack>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '8px',
          bgcolor: 'rgba(228, 11, 90, 0.12)',
          color: 'primary.main',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Icon sx={{ fontSize: 22 }} />
      </Box>
    </Stack>
  );
};
