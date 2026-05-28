import { Box, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, PrimaryButton } from '@/pages/user/pages/profile/shared/ui.jsx';
import SupportPageShell from './SupportPageShell.jsx';
import { supportRouteBase } from './utils.js';

const SupportArticlePage = ({ title, intro, bullets, iconSrc }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const base = supportRouteBase(location.pathname);

  return (
    <SupportPageShell title={title}>
      <Card sx={{ p: 2, background: 'linear-gradient(135deg, rgba(228,11,90,0.18) 0%, rgba(18,18,18,1) 60%)' }}>
        <Stack alignItems="center" gap={1.25}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: '12px',
              bgcolor: 'rgba(255,255,255,0.1)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <Box component="img" src={iconSrc} alt="" sx={{ width: 24, height: 24 }} />
          </Box>
        </Stack>
      </Card>
      <Card sx={{ p: 2 }}>
        <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
          {intro}
        </Typography>
      </Card>
      <Card sx={{ p: 2 }}>
        <Stack gap={1.25} alignItems="flex-end">
          {bullets.map((item) => (
            <Typography key={item} variant="caption1" color="custom.white" textAlign="right" lineHeight={2}>
              • {item}
            </Typography>
          ))}
        </Stack>
      </Card>
      <PrimaryButton onClick={() => navigate(`${base}/tickets/no-ticket`)}>ثبت تیکت پشتیبانی</PrimaryButton>
    </SupportPageShell>
  );
};

export default SupportArticlePage;
