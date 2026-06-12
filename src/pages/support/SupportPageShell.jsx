import { IconButton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronForward from '@/components/icons/ChevronForward';
import BottomNav from '@/components/layout/bottom-navigation.jsx';

export default function SupportPageShell({ title, children, bottomNav = true }) {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        overflowX: 'hidden',
        pb: bottomNav ? 10 : 4,
      }}
      alignItems="center"
      gap={2}
    >
      <Stack sx={{ width: '100%', px: 0.5, pt: 1.5 }} gap={2}>
        <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.75}>
          <Typography variant="title2" color="custom.white" sx={{ lineHeight: 1.4 }}>
            {title}
          </Typography>
          <IconButton onClick={() => navigate(-1)} sx={{ width: 24, height: 24, p: 0 }}>
            <ChevronForward color="#fff" />
          </IconButton>
        </Stack>

        <Stack sx={{ width: 'calc(100% - 32px)', mx: 'auto' }} gap={1.5}>
          {children}
        </Stack>
      </Stack>

      {bottomNav && <BottomNav />}
    </Stack>
  );
}
