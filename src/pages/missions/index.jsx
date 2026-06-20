import { Box, Stack, Tab, Tabs } from '@mui/material';
import { MissionsBanner } from './components/MissionsBanner';
import { missions, missionTabs } from './mission-config';
import BottomNav from '@/components/layout/bottom-navigation';
import { useSearchParams } from 'react-router-dom';
import MissionCard from './components/MissionCard';

export default function MissionsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = searchParams.get('mission_tab') || missionTabs[0].value;

  function onTabClick(e, value) {
    if (value) searchParams.set('mission_tab', value);
    else searchParams.delete('mission_tab', value);

    setSearchParams(searchParams);
  }

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
          <Tab key={tab.value} tab={tab} label={tab.label} value={tab.value} />
        ))}
      </Tabs>

      {/* Render mission cards container */}
      <Stack sx={{ width: '100%' }}>
        <MissionCard mission={missions[0]} />
      </Stack>

      <BottomNav />
    </Stack>
  );
}
