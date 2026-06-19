import { Box, Stack, Typography } from '@mui/material';

interface LobbyCardHeaderProps {
  name: string;
  title: string;
}

export default function LobbyCardHeader({ name, title }: LobbyCardHeaderProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ width: '100%', mb: 1 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="title2" color="text.white" sx={{ direction: 'rtl' }}>
          {title}
        </Typography>
      </Box>
    </Stack>
  );
}
