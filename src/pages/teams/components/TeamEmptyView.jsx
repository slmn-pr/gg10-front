import { Box, Button, Stack, Typography } from '@mui/material';

export default function TeamEmptyView({ onCreateTeam }) {
  return (
    <Stack alignItems="center" gap={2}>
      <Box
        component="img"
        src="/images/teams/empty_teams_image.png"
        alt="empty teams"
        sx={{ width: '100%', display: 'block' }}
      />

      <Typography
        variant="body3"
        color="custom.white"
        component="p"
        textAlign="center"
        sx={{ px: 3 }}
      >
        هنوز عضو هیچ تیمی نیستید. تیم بسازید، دوستانتان را دعوت کنید یا به تیم‌های دیگر
        بپیوندید و به‌صورت تیمی در لابی‌ها شرکت کنید
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ width: 'calc(100% - 32px)', height: 46, borderRadius: '8px' }}
        onClick={onCreateTeam}
      >
        <Typography variant="button1">+ ساخت تیم جدید</Typography>
      </Button>
    </Stack>
  );
}
