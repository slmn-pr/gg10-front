import { Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BottomNavigationItem({ path, active = false, sx, children }) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Button
      key={path}
      onClick={() => navigate(path)}
      sx={{
        color: active ? theme.palette.primary.main : theme.palette.custom.iconsWhite,
        flexDirection: 'column',
        padding: '8px 4px',
        minWidth: 0,
        height: '100%',
        '&:hover': {
          bgcolor: 'transparent',
        },
        ...sx,
      }}
    >
      <Typography
        variant="sub2"
        sx={{
          color: active ? theme.palette.primary.main : theme.palette.custom.whiteOnBg1,
          mt: 0.5,
          fontWeight: active ? 700 : 400,
          fontSize: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Typography>
    </Button>
  );
}
