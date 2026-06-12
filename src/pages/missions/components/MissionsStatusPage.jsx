import { Stack } from '@mui/material';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import { MissionCard } from './MissionCard.jsx';
import { MissionTabButton } from './MissionTabButton.jsx';
import { MissionsBanner } from './MissionsBanner.jsx';
import { MissionsEmptyState } from './MissionsEmptyState.jsx';
import { missions, missionTabs } from '../mission-config.js';

export const MissionsStatusPage = ({ status, empty = false }) => {
  const filteredMissions = empty
    ? []
    : missions.filter((mission) => mission.status === status);

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        overflowX: 'hidden',
        pb: 10,
      }}
      alignItems="center"
      gap={2}
    >
      <MissionsBanner />

      <Stack sx={{ width: '100%', px: 0.5, bgcolor: 'custom.bg1' }} gap={2} alignItems="center">
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1.5}
          sx={{
            width: 'calc(100% - 32px)',
            pt: 0.5,
          }}
        >
          {missionTabs.map((tab) => (
            <MissionTabButton key={tab.value} tab={tab} active={status === tab.value} />
          ))}
        </Stack>

        <Stack sx={{ width: 'calc(100% - 32px)' }} gap={1}>
          {filteredMissions.length > 0 ? (
            filteredMissions.map((mission) => <MissionCard key={mission.id} mission={mission} />)
          ) : (
            <MissionsEmptyState activeStatus={status} />
          )}
        </Stack>
      </Stack>

      <BottomNav />
    </Stack>
  );
};
