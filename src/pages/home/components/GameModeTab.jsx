import { Box, Button, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export default function GameModeSelector() {
  const theme = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();

  const isMultiplayerSelected = useMemo(
    () =>
      searchParams.get('gameMode')
        ? searchParams.get('gameMode') === 'multiplayer'
        : true,
    [searchParams],
  );

  const handleGameModeChange = (gameMode) => {
    if (!gameMode) {
      searchParams.delete('gameMode');
    } else {
      searchParams.set('gameMode', gameMode);
    }

    // Attach to search params
    setSearchParams(searchParams);
  };

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
          variant={isMultiplayerSelected ? 'contained' : 'outlined'}
          onClick={() => handleGameModeChange('multiplayer')}
          endIcon={<MultiPlayerIcon color={isMultiplayerSelected ? '#000' : '#fff'} />}
          sx={{
            bgcolor: isMultiplayerSelected ? 'custom.tint1' : 'custom.bg2',
            borderRadius: 2,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            transform: 'translateX(5px)',
            color: isMultiplayerSelected ? '#000' : 'custom.tint4',
            py: 1,
            zIndex: isMultiplayerSelected ? 2 : 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border: isMultiplayerSelected
              ? `2px solid ${theme.palette.custom.primaryStroke}`
              : '1px solid white',
            '&:hover': {
              bgcolor: isMultiplayerSelected ? 'custom.tint1' : 'custom.bg2',
            },
          }}
        >
          <Typography
            variant="title3"
            sx={{ color: isMultiplayerSelected ? '#000' : '#fff' }}
          >
            {' '}
            مولتی پلیر
          </Typography>
        </Button>
        <Button
          fullWidth
          variant={!isMultiplayerSelected ? 'contained' : 'outlined'}
          endIcon={<BattleRoyalIcon color={!isMultiplayerSelected ? '#000' : '#fff'} />}
          onClick={() => handleGameModeChange('battle-royal')}
          startIcon={
            <SvgIcon
              src={ParaglidingRoundedIcon}
              sx={{ color: !isMultiplayerSelected ? '#000' : '#fff' }}
            />
          }
          sx={{
            color: !isMultiplayerSelected ? '#fff' : 'custom.tint4',
            bgcolor: !isMultiplayerSelected ? 'custom.tint2' : 'custom.bg2',
            borderRadius: 2,
            borderTopLeftRadius: !isMultiplayerSelected ? 2 : 10,
            borderBottomLeftRadius: !isMultiplayerSelected ? 2 : 10,
            transform: 'translateX(-5px)',
            zIndex: !isMultiplayerSelected ? 2 : 1,
            py: 1,
            fontSize: '1rem',
            fontWeight: 'bold',
            border: !isMultiplayerSelected
              ? `2px solid ${theme.palette.custom.primaryStroke}`
              : '1px solid white',
            '&:hover': {
              bgcolor: !isMultiplayerSelected ? 'custom.tint2' : 'custom.bg2',
            },
          }}
        >
          <Typography
            variant="title3"
            sx={{ color: !isMultiplayerSelected ? '#000' : '#fff' }}
          >
            بتل رویال
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}
