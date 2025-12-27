import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TeamEmptyView() {
  const navigate = useNavigate();

  const handleCreateTeam = () => {
    navigate('/teams/create');
  };

  return (
    <Box
      sx={{ mx: '14px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <img src="/images/teams/empty_teams_image.png" alt="team empty view" />
      <Typography
        mt="8px"
        variant="body3"
        color="custom.white"
        component="p"
        textAlign="center"
      >
        هنوز عضو هیچ تیمی نیستید. تیم بسازید، دوستانتان را دعوت کنید یا به تیم‌های دیگر
        بپیوندید و به‌صورت تیمی در لابی‌ها شرکت کنید
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ width: '252px', height: '40px', mt: '12px' }}
        onClick={handleCreateTeam}
      >
        <Typography variant="button1">+ ساخت تیم جدید </Typography>
      </Button>
    </Box>
  );
}
