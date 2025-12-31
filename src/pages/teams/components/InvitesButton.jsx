import ChevronBackward from '@/components/icons/ChevronBackward';
import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const InvitesButtonIcon = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="caption2" color="white">
        4
      </Typography>
    </Box>
  );
};

export default function InvitesButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/teams/invites');
  };

  return (
    <Button
      variant="text"
      color="primary"
      fullWidth
      onClick={handleClick}
      //   sx={{ mx: 1.5 }}
      //   endIcon={<InvitesButtonIcon color="white" />}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 1,
          px: 1.5,
        }}
      >
        <Typography variant="sub1" color="white">
          دعوت نامه ها
        </Typography>

        <InvitesButtonIcon />
      </Box>

      <ChevronBackward color="white" />
    </Button>
  );
}
