import { Box, Button, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import ShieldRoundedIcon from '@/assets/icons/chips/placement.svg';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import { useState } from 'react';

export default function GameModeSelector() {
  const [selectedGameMode, setSelectedGameMode] = useState('multiplayer');
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{ mb: 2, bgcolor: '#151826', borderRadius: 3, p: 0.5 }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          borderRadius: 2.5,
          border: '1px solid white',
        }}
      >
        <Button
          fullWidth
          variant="contained"
          startIcon={<SvgIcon src={ShieldRoundedIcon} />}
          sx={{
            bgcolor: '#FFB4AB',
            color: '#000',
            borderRadius: 2.5,
            '&:hover': { bgcolor: '#FFB4AB' },
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border:
              selectedGameMode === 'multiplayer'
                ? `2px solid ${theme.palette.custom.primaryStroke}`
                : '1px solid transparent',
          }}
        >
          <Typography variant="title3">
            {' '}
            مولتی پلیر
          </Typography>
        </Button>
        <Button
          fullWidth
          startIcon={<SvgIcon src={ParaglidingRoundedIcon} sx={{ color: '#fff' }} />}
          sx={{
            color: '#fff',
            borderRadius: 2.5,
            py: 1,
            fontSize: '1rem',
          }}
        >
          <Typography variant='title3'>بتل رویال</Typography>
        </Button>
      </Box>
    </Stack>
  );
}
