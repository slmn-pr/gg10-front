import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router-dom';

const MDAppBar = ({ title, actions, onBack, dense }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderRadius: (theme) => theme.shape.custom.large,
        backgroundColor: (theme) => theme.vars.palette.surfaceContainer,
        boxShadow: (theme) => theme.shadows[2],
        px: 1,
        mt: 2,
      }}
    >
      <Toolbar sx={{ minHeight: dense ? 56 : 72 }}>
        <Stack direction="row" spacing={2} alignItems="center" flexGrow={1}>
          <IconButton onClick={handleBack} size="large" edge="start">
            <ArrowBackRoundedIcon />
          </IconButton>
          <Box>
            <Typography variant="titleLarge">{title}</Typography>
            <Typography variant="bodySmall" color="text.secondary">
              MD3 Experience
            </Typography>
          </Box>
        </Stack>
        {actions}
      </Toolbar>
    </AppBar>
  );
};

export default MDAppBar;
