import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export const WalletStatusNotice = ({ type, text }) => {
  const isSuccess = type === 'success';
  const Icon = isSuccess ? CheckCircleOutline : ErrorOutline;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      gap={1}
      sx={{
        width: '100%',
        minHeight: 52,
        px: 1.5,
        borderRadius: '8px',
        bgcolor: isSuccess ? 'rgba(17, 152, 89, 0.14)' : 'rgba(254, 58, 58, 0.14)',
        color: isSuccess ? 'custom.success' : 'custom.errorOnPrimaryBg',
      }}
    >
      <Typography variant="caption1" color="inherit">
        {text}
      </Typography>
      <Icon sx={{ fontSize: 20 }} />
    </Stack>
  );
};
