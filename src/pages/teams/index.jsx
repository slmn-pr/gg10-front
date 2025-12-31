import { useLocation, useNavigate } from 'react-router-dom';

import useAuthStore from '@/store/auth-store';
import { Box, Button, Typography, useTheme } from '@mui/material';
import TeamEmptyView from './components/TeamEmptyView';
import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import CustomToast from '@/components/toast/CustomToast';

export default function TeamsPage() {
  const theme = useTheme();
  const isAuthenticated = useAuthStore(
    (state) => state.logged_in && !!state.access_token,
  );

  const [userTeams, setUserTeams] = useState([]);

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    if (state && state.message) {
      toast.custom((t) => <CustomToast t={t} message={state.message} />);

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
          justifyContent: 'flex-end',
          pb: '12px',
          borderTop: `1px solid black`,
          borderBottom: `1px solid black`,
        }}
      >
        <Button startIcon={<ChevronForwardIcon color="white" />}>
          <Typography variant="button1" color="white">
            تیم ها
          </Typography>
        </Button>
      </Box>

      {/* Content */}

      <Box sx={{ mt: '60px' }}>{userTeams.length === 0 ? <TeamEmptyView /> : <></>}</Box>
    </Box>
  );
}
