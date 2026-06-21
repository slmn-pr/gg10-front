import { Stack, Tab, Tabs, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import BottomNav from '@/components/layout/bottom-navigation';
import MissionCard from './components/MissionCard';
import { listMissionsReq } from '@/api';
import { MissionsBanner } from './components/MissionsBanner';
import { missionTabs, TAB_TO_API_STATE } from './mission-config';

export default function MissionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = searchParams.get('mission_tab') || missionTabs[0].value;
  const apiState = TAB_TO_API_STATE[selectedTab];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['missions', apiState],
    queryFn: () => listMissionsReq({ state: apiState, limit: 50, offset: 0 }),
  });

  function onTabClick(_event, value) {
    if (value) searchParams.set('mission_tab', value);
    else searchParams.delete('mission_tab');
    setSearchParams(searchParams);
  }

  const missions = data?.items ?? [];

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        overflowX: 'hidden',
        pb: 10,
        p: 2,
      }}
      alignItems="center"
      gap={2}
    >
      <MissionsBanner />

      <Tabs value={selectedTab} onChange={onTabClick} sx={{ direction: 'rtl' }}>
        {missionTabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>

      <Stack sx={{ width: '100%' }}>
        {isLoading && (
          <Typography variant="sub1" color="custom.grey2" textAlign="center" mt={2}>
            در حال بارگذاری...
          </Typography>
        )}

        {isError && (
          <Typography variant="sub1" color="error" textAlign="center" mt={2}>
            خطا در دریافت ماموریت‌ها
          </Typography>
        )}

        {!isLoading && !isError && missions.length === 0 && (
          <Typography variant="sub1" color="custom.grey2" textAlign="center" mt={2}>
            ماموریتی یافت نشد
          </Typography>
        )}

        {!isLoading &&
          !isError &&
          missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
      </Stack>

      <BottomNav />
    </Stack>
  );
}
