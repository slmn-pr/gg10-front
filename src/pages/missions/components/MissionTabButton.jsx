import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const MissionTabButton = ({ tab, active }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(tab.path)}
      sx={{
        height: 40,
        minWidth: 0,
        flex: '1 0 calc(50% - 6px)',
        borderRadius: '8px',
        bgcolor: active ? 'custom.tint1' : 'custom.bg2',
        color: active ? 'custom.black' : 'custom.white',
        border: active ? '2px solid' : '1px solid',
        borderColor: active ? 'custom.tint2' : 'custom.grey5',
        '&:hover': {
          bgcolor: active ? 'custom.tint1' : 'custom.grey5',
        },
      }}
    >
      <Typography variant="button2">{tab.label}</Typography>
    </Button>
  );
};
