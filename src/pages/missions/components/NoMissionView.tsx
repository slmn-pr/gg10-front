import { Rocket, RocketLaunch } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

export default function NoMissionView() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ direction: 'rtl', gap: 1, mt: 15 }}
    >
      <RocketLaunch />
      <Typography variant='title3'>در حال حاضر مأموریت فعالی ندارید</Typography>
    </Stack>
  );
}
