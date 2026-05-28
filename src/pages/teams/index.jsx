import ChevronForward from '@/components/icons/ChevronForward';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CustomToast from '@/components/toast/CustomToast';
import InvitesButton from './components/InvitesButton';
import TeamEmptyView from './components/TeamEmptyView';
import TeamsView from './components/TeamsView';
import { getTeamInvites, TEAMS_MOCK } from './_mock';

export default function TeamsPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state;

  const seededTeams = useMemo(() => {
    if (!routeState?.message) return TEAMS_MOCK;
    return [
      ...TEAMS_MOCK,
      {
        name: routeState.teamName,
        members: routeState.teamMembers,
      },
    ];
  }, [routeState]);

  const [userTeams] = useState(seededTeams);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);

  useEffect(() => {
    if (!routeState?.message) return;

    toast.custom((t) => (
      <CustomToast
        t={t}
        message={routeState.message}
        onClose={() => {
          navigate(location.pathname, { replace: true });
        }}
      />
    ));

    navigate(location.pathname, { replace: true });
  }, [routeState, navigate, location.pathname]);

  const invitesCount = useMemo(() => getTeamInvites().length, []);

  const hasTeams = userTeams.length > 0;

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 56px)',
        backgroundColor: theme.palette.custom.primaryBg,
        pb: 10,
      }}
      dir="rtl"
    >
      <Stack sx={{ px: 2, pt: 1.5 }} gap={1.25}>
        <Box
          sx={{
            height: 56,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 0.75,
          }}
        >
          <Typography variant="title2" color="custom.white">
            تیم‌ها
          </Typography>
          <ChevronForward color="#fff" />
        </Box>
        <InvitesButton count={invitesCount} />

        {hasTeams ? (
          <TeamsView
            teams={userTeams}
            selectedTeamIndex={selectedTeamIndex}
            onSelectTeam={setSelectedTeamIndex}
            onCreateTeam={() => navigate('/teams/create')}
          />
        ) : (
          <TeamEmptyView onCreateTeam={() => navigate('/teams/create')} />
        )}
      </Stack>
    </Box>
  );
}
