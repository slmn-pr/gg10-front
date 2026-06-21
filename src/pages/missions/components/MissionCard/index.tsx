import { Box, Button, Card, Stack, useTheme } from '@mui/material';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import MissionCardImage from './MissionCardImage';
import MissionCardContent from './MissionCardContent';
import type { MissionResponse } from '@/api/missions/missions';
import { claimMissionRewardReq } from '@/api';

interface MissionCardProps {
  mission: MissionResponse;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const theme = useTheme();
  const queryClient = useQueryClient();

  const isDisabled = mission.state !== 'active';

  const { mutate, isPending } = useMutation({
    mutationKey: ['mission', 'claim', mission.id],
    mutationFn: claimMissionRewardReq,
    onSuccess: (data) => {
      toast.success(`جایزه با موفقیت دریافت شد: ${data.reward} تومان`);
      queryClient.invalidateQueries({ queryKey: ['missions'] });
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ?? 'خطا در دریافت جایزه. دوباره تلاش کنید.';
      toast.error(message);
    },
  });

  return (
    <Stack>
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
          ...(isDisabled && {
            filter: 'grayscale(0.9)',
            opacity: 0.6,
            pointerEvents: 'none',
          }),
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

      {mission.state === 'claimable' && (
        <Button
          variant="contained"
          sx={{ width: '292px', mx: 'auto' }}
          onClick={() => mutate(mission.id)}
          disabled={isPending}
        >
          {!isPending && 'دریافت جایزه'}
          {isPending && 'در حال دریافت جایزه'}
        </Button>
      )}

      {mission.state === 'completed' && (
        <Button
          variant="contained"
          sx={{ width: '292px', mx: 'auto', bgcolor: 'custom.grey4' }}
          disabled
        >
          جایزه دریافت شده است !
        </Button>
      )}

      {mission.state === 'expired' && (
        <Button
          variant="contained"
          sx={{ width: '292px', mx: 'auto', bgcolor: 'custom.grey4' }}
          disabled
        >
          جایزه منقضی شده است !
        </Button>
      )}
    </Stack>
  );
}
