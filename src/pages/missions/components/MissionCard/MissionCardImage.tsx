import { Box, Typography, useTheme } from '@mui/material';
import type { MissionDifficulty, MissionState } from '@/api/missions/missions';
import { missionDifficultyLabel, missionStatusConfig } from '../../mission-config';

interface MissionCardImageProps {
  difficulty: MissionDifficulty;
  state: MissionState;
  imageUrl?: string | null;
}

export default function MissionCardImage({
  difficulty,
  state,
  imageUrl,
}: MissionCardImageProps) {
  const theme = useTheme();
  const statusConfig = missionStatusConfig[state];

  return (
    <Box
      sx={{
        width: '88px',
        minHeight: '112px',
        position: 'relative',
        flexShrink: 0,
        zIndex: 1,
      }}
    >
      <img
        src={imageUrl || '/images/player_card_sample.png'}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Difficulty Badge */}
      <Box
        bgcolor={theme.palette.custom.tagOnCardPicBg}
        sx={{
          width: '75px',
          direction: 'rtl',
          position: 'absolute',
          top: 4,
          right: 0,
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          px: 1,
          py: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <Typography
          textAlign="center"
          variant="sub3"
          component="p"
          sx={{
            color: statusConfig?.color ?? '#066E45',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {missionDifficultyLabel[difficulty]}
        </Typography>
      </Box>
    </Box>
  );
}
