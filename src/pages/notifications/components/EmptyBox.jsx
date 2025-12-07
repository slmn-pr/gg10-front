import NoNotificationIcon from '@/components/icons/NoNotificationIcon';
import { Box, Stack, Typography } from '@mui/material';

export default function EmptyBox() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack display="flex" alignItems="center" spacing={1}>
        <NoNotificationIcon />
        <Typography variant="title2" color="custom.info">
          اعلانی برای نمایش ندارید
        </Typography>
      </Stack>
    </Box>
  );
}
