import { Card, Stack, useTheme } from '@mui/material';
import MissionCardImage from './MissionCardImage';
import MissionCardContent from './MissionCardContent';
import type { MissionResponse } from '@/api/missions/missions';

interface MissionCardProps {
  mission: MissionResponse;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: '100%',
        minHeight: '112px',
        mb: '12px',
        background: theme.palette.custom.grey6,
        borderRadius: 2,
        border: 'none',
        padding: 0,
        position: 'relative',
        overflow: 'hidden',
        direction: 'ltr',
      }}
    >
      <Stack
        direction="row"
        sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'stretch' }}
      >
        <MissionCardImage
          difficulty={mission.difficulty}
          state={mission.state}
          imageUrl={mission.image_url}
        />

        <MissionCardContent
          title={mission.title}
          description={mission.description}
          reward={mission.reward}
          progress={mission.progress}
          goal={mission.goal}
          expiresAt={mission.expires_at}
          state={mission.state}
        />
      </Stack>
    </Card>
  );
}
