import { Rocket, RocketLaunch } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { missionTabs, TabValue } from '../mission-config';

export default function NoMissionView() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = searchParams.get('mission_tab') || missionTabs[0].value;

  function NavigateToActiveMissionTab() {
    searchParams.set('mission_tab', 'active');
    setSearchParams(searchParams);
  }

  if (selectedTab === 'ready')
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ direction: 'rtl', gap: 1, mt: 15 }}
        gap={2}
      >
        <Typography variant="title3">در حال حاضر جایزه‌ای برای دریافت ندارید</Typography>

        <Button
          variant="outlined"
          size="large"
          color="white"
          sx={{ width: '252px' }}
          onClick={NavigateToActiveMissionTab}
        >
          مشاهده مأموریت‌های فعال
        </Button>
      </Stack>
    );

  if (selectedTab === 'expired')
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ direction: 'rtl', gap: 1, mt: 15 }}
        gap={2}
      >
        <Typography variant="title3">
          در حال حاضر مأموریت منقضی‌ ‌شده‌ای ندارید
        </Typography>

        <Button
          variant="outlined"
          size="large"
          color="white"
          sx={{ width: '252px' }}
          onClick={NavigateToActiveMissionTab}
        >
          مشاهده مأموریت‌های فعال
        </Button>
      </Stack>
    );

  if (selectedTab === 'completed')
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ direction: 'rtl', gap: 1, mt: 15 }}
        gap={2}
      >
        <Typography variant="title3">در حال حاضر مأموریت تکمیل‌شده‌ای ندارید </Typography>

        <Button
          variant="outlined"
          size="large"
          color="white"
          sx={{ width: '252px' }}
          onClick={NavigateToActiveMissionTab}
        >
          مشاهده مأموریت‌های فعال
        </Button>
      </Stack>
    );

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ direction: 'rtl', gap: 1, mt: 15 }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center" gap={0.5}>
        <RocketLaunch />
        <Typography variant="title3">در حال حاضر مأموریت فعالی ندارید</Typography>
      </Stack>
    </Stack>
  );
}
