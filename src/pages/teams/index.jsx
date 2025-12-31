import { useLocation, useNavigate } from 'react-router-dom';

import useAuthStore from '@/store/auth-store';
import { Box, Button, useTheme } from '@mui/material';
import TeamEmptyView from './components/TeamEmptyView';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import CustomToast from '@/components/toast/CustomToast';
import BackwardButton from '@/components/layout/BackwardButton';
import { TEAMS_MOCK } from './_mock';
import InvitesButton from './components/InvitesButton';

export default function TeamsPage() {
  const theme = useTheme();
  const isAuthenticated = useAuthStore(
    (state) => state.logged_in && !!state.access_token,
  );

  const [userTeams, setUserTeams] = useState(TEAMS_MOCK);

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.message) {
      toast.custom((t) => (
        <CustomToast
          t={t}
          message={state.message}
          onClose={() => {
            navigate(location.pathname, { replace: true });
          }}
        />
      ));

      // append to userTeams
      setUserTeams([
        ...userTeams,
        {
          name: state.teamName,
          members: state.teamMembers,
        },
      ]);

      // Clear the state
      navigate(location.pathname, { replace: true });
    }
  }, [state]);

  /** This variable or state -> store the teams of the user
   * if this variable is null, we need to show the empty box
   */

  // Show login modal if not authenticated
  //   if (!isAuthenticated) {
  //     return (
  //       <LoginModal
  //         open={true}
  //         onClose={() => {
  //           // Redirect to home when modal is closed
  //           navigate('/home');
  //         }}
  //       />
  //     );
  //   }

  //   if (userTeams === null) {
  //     return <TeamEmptyView />;
  //   }

  // Show teams page content if authenticated and user has teams
  return (
    <Box sx={{ backgroundColor: theme.palette.custom.primaryBg }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          mb: '12px',
          borderTop: `1px solid black`,
          borderBottom: `1px solid black`,
        }}
      >
        <BackwardButton>تیم ها</BackwardButton>
        <InvitesButton />
      </Box>

      {/* Content */}
      <Box sx={{ mt: '60px' }}>{userTeams.length === 0 ? <TeamEmptyView /> : <></>}</Box>
    </Box>
  );
}
