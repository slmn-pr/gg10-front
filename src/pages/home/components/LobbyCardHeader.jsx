import ChevronUpIcon from '@/components/icons/ChevronUp';
import { Box, IconButton, Stack, Typography } from '@mui/material';

export default function LobbyCardHeader({ name, title, onExpand }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
      sx={{ width: '100%', mb: 1 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="title2" color="text.white" sx={{ direction: 'rtl' }}>
          {title}
        </Typography>

        {onExpand && (
          <IconButton size="small" onClick={onExpand} sx={{ color: 'text.secondary' }}>
            <ChevronUpIcon />
          </IconButton>
        )}
      </Box>

      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>
    </Stack>
  );
}
