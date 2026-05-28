import { Stack, Typography } from '@mui/material';

export const WalletBalanceSummary = () => (
  <Stack
    sx={{
      bgcolor: 'custom.bg2',
      borderRadius: '8px',
      p: 1.5,
    }}
    gap={1}
  >
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="caption1" color="custom.grey0">
        ۳,۲۵۰,۰۰۰ تومان
      </Typography>
      <Typography variant="caption1" color="custom.grey1">
        موجودی فعلی
      </Typography>
    </Stack>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="caption1" color="custom.grey0">
        ۲,۷۵۰,۰۰۰ تومان
      </Typography>
      <Typography variant="caption1" color="custom.grey1">
        قابل برداشت
      </Typography>
    </Stack>
  </Stack>
);
