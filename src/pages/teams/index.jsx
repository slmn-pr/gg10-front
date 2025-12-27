import { useNavigate } from 'react-router-dom';

import useAuthStore from '@/store/auth-store';
import LoginModal from '@/components/modal/LoginModal';
import { Box, Button, Typography, useTheme } from '@mui/material';
import TeamEmptyView from './components/TeamEmptyView';
import ChevronBackward from '@/components/icons/ChevronBackward';
import ChevronForwardIcon from '@/components/icons/ChevronForward';

export default function TeamsPage() {
  const theme = useTheme();
  const isAuthenticated = useAuthStore(
    (state) => state.logged_in && !!state.access_token,
  );

  const navigate = useNavigate();

  /** This variable or state -> store the teams of the user
   * if this variable is null, we need to show the empty box
   */
  const userTeams = null;

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

      <Box sx={{ mt: '60px' }}>{!userTeams ? <TeamEmptyView /> : <></>}</Box>
    </Box>
  );
}
