import { Box, Button, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import ShieldRoundedIcon from '@/assets/icons/chips/placement.svg';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import { useState } from 'react';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';

export default function GameModeSelector() {
  const [selectedGameMode, setSelectedGameMode] = useState('battle-royal');
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
          variant={selectedGameMode === 'multiplayer' ? 'contained' : 'outlined'}
          onClick={() => setSelectedGameMode('multiplayer')}
          startIcon={<MultiPlayerIcon />}
          sx={{
            bgcolor: selectedGameMode === 'multiplayer' ? 'custom.tint1' : 'custom.bg2',
            borderRadius: 2,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            transform: 'translateX(5px)',
            color: selectedGameMode === 'multiplayer' ? '#000' : 'custom.tint4',
            py: 1,
            zIndex: selectedGameMode === 'multiplayer' ? 2 : 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border:
              selectedGameMode === 'multiplayer'
                ? `2px solid ${theme.palette.custom.primaryStroke}`
                : '1px solid white',
            '&:hover': {
              bgcolor: selectedGameMode === 'multiplayer' ? 'custom.tint1' : 'custom.bg2',
            },
          }}
        >
          <Typography
            variant="title3"
            sx={{ color: selectedGameMode === 'multiplayer' ? '#000' : '#fff' }}
          >
            {' '}
            مولتی پلیر
          </Typography>
        </Button>
        <Button
          fullWidth
          variant={selectedGameMode === 'battle-royal' ? 'contained' : 'outlined'}
          onClick={() => setSelectedGameMode('battle-royal')}
          startIcon={
            <SvgIcon
              src={ParaglidingRoundedIcon}
              sx={{ color: selectedGameMode === 'battle-royal' ? '#000' : '#fff' }}
            />
          }
          sx={{
            color: selectedGameMode === 'battle-royal' ? '#fff' : 'custom.tint4',
            bgcolor: selectedGameMode === 'battle-royal' ? 'custom.tint2' : 'custom.bg2',
            borderRadius: 2,
            borderTopLeftRadius: selectedGameMode === 'battle-royal' ? 2 : 10,
            borderBottomLeftRadius: selectedGameMode === 'battle-royal' ? 2 : 10,
            transform: 'translateX(-5px)',
            zIndex: selectedGameMode === 'battle-royal' ? 2 : 1,
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border:
              selectedGameMode === 'battle-royal'
                ? `2px solid ${theme.palette.custom.primaryStroke}`
                : '1px solid white',
            '&:hover': {
              bgcolor:
                selectedGameMode === 'battle-royal' ? 'custom.tint2' : 'custom.bg2',
            },
          }}
        >
          <Typography
            variant="title3"
            sx={{ color: selectedGameMode === 'battle-royal' ? '#000' : '#fff' }}
          >
            بتل رویال
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}
