import { Box, Button, Stack, Typography } from '@mui/material';

export default function TeamEmptyView({ onCreateTeam }) {
  return (
    <Stack sx={{ px: 2, pt: 4 }} alignItems="center" gap={1.5}>
      <Box component="img" src="/images/teams/empty_teams_image.png" alt="empty teams" sx={{ width: 220, maxWidth: '100%' }} />

      <Typography variant="body3" color="custom.white" component="p" textAlign="center" sx={{ maxWidth: 320 }}>
        هنوز عضو هیچ تیمی نیستید. تیم بسازید، دوستانتان را دعوت کنید یا به تیم‌های دیگر
        بپیوندید و به‌صورت تیمی در لابی‌ها شرکت کنید.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ width: 252, height: 40, mt: 0.5, borderRadius: '8px' }}
        onClick={onCreateTeam}
      >
        <Typography variant="button1">+ ساخت تیم جدید</Typography>
      </Button>
    </Stack>
  );
}
