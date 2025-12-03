import { Box, Button, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import ShieldRoundedIcon from '@/assets/icons/chips/placement.svg';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import { useState } from 'react';

export default function GameModeSelector() {
  const [selectedGameMode, setSelectedGameMode] = useState('multiplayer');
  const theme = useTheme();

  return (
    <Stack direction="row" spacing={0} sx={{ mb: 2, borderRadius: 1, p: 0.5 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Button
          fullWidth
          variant="contained"
          startIcon={<SvgIcon src={ShieldRoundedIcon} />}
          sx={{
            bgcolor: 'custom.tint1',
            transform: 'translateX(5px)',
            color: '#000',
            borderRadius: 2.5,
            '&:hover': { bgcolor: '#FFB4AB' },
            py: 1,
            zIndex: 2,
            fontSize: '1rem',
            fontWeight: 'bold',
            border:
              selectedGameMode === 'multiplayer'
                ? `2px solid ${theme.palette.custom.primaryStroke}`
                : '1px solid white',
          }}
        >
          <Typography variant="title3"> مولتی پلیر</Typography>
        </Button>
        <Button
          fullWidth
          startIcon={<SvgIcon src={ParaglidingRoundedIcon} sx={{ color: '#fff' }} />}
          sx={{
            color: '#fff',
            borderRadius: 2,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            transform: 'translateX(-5px)',
            zIndex: 1,
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border:
              selectedGameMode === 'battle-royal'
                ? `2px solid ${theme.palette.custom.primaryStroke}`
                : '1px solid white',
          }}
        >
          <Typography variant="title3">بتل رویال</Typography>
        </Button>
      </Box>
    </Stack>
  );
}
