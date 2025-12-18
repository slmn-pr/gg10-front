import { Button, Typography } from '@mui/material';

export default function FilterDrawerToggler({ onClick, label, icon, active = false }) {
  return (
    <Button
      size="large"
      variant="outlined"
      startIcon={icon}
      sx={{
        minWidth: 'max-content',
        borderRadius: 2,
        borderColor: active ? 'custom.primaryStroke' : 'white',
        borderWidth: 2,
        color: active ? 'custom.blackOnPrimary' : 'white',
        p: 1,
        '& .MuiChip-icon': { color: '#fff' },
        backgroundColor: active ? 'custom.tint2' : 'transparent',
      }}
      onClick={onClick}
    >
      
      <Typography variant="subtitle2" color={active ? 'custom.blackOnPrimary' : 'white'}>
        {label}
      </Typography>
    </Button>
  );
}
