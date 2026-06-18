// src/components/game-mode-selector.jsx

import { Box, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';

export default function GameModeSelector({ value, onChange }) {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGameMode = value ?? searchParams.get('game_mode') ?? 'multiplayer';
  const isMultiplayerSelected = useMemo(
    () => selectedGameMode === 'multiplayer',
    [selectedGameMode],
  );

  const handleGameModeChange = (event, gameMode) => {
    if (!gameMode) return;

    if (onChange) {
      onChange(gameMode);
      return;
    }

    searchParams.set('game_mode', gameMode);
    setSearchParams(searchParams);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      value={selectedGameMode}
      onChange={handleGameModeChange}
      aria-label="Platform"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 2,
        p: 0,
      }}
    >
      <ToggleButton
        value="multiplayer"
        sx={{
          flexGrow: 1,
          py: 1,
          borderRadius: 2,
          border: '2px solid white',
          '&.Mui-selected': {
            backgroundColor: theme.palette.custom.tint1,
            color: '#000',
            border: `2px solid ${theme.palette.custom.tint2}`,
            '&:hover': {
              backgroundColor: theme.palette.custom.tint1,
            },
          },
          '&.Mui-not-selected': {
            backgroundColor: theme.palette.custom.bg2,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Typography variant="title3" sx={{ color: isMultiplayerSelected ? '#000' : '#fff' }}>
            مولتی پلیر
          </Typography>
          <MultiPlayerIcon color={isMultiplayerSelected ? '#000' : '#fff'} />
        </Box>
      </ToggleButton>

      <ToggleButton
        value="battle-royal"
        sx={{
          flexGrow: 1,
          py: 1,
          borderRadius: 2,
          border: '2px solid white',
          '&.Mui-selected': {
            backgroundColor: theme.palette.custom.tint1,
            color: '#000',
            border: `2px solid ${theme.palette.custom.tint2}`,
            '&:hover': {
              backgroundColor: theme.palette.custom.tint1,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Typography variant="title3" sx={{ color: !isMultiplayerSelected ? '#000' : '#fff' }}>
            بتل رویال
          </Typography>
          <BattleRoyalIcon color={!isMultiplayerSelected ? '#000' : '#fff'} />
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
