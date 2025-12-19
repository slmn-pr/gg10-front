import { Button, Typography } from '@mui/material';
import FilterChipCloseButton from './FilterChipCloseButton';

export default function FilterChip({ onClick, label, icon, active = false }) {
  return (
    <Button
      size="large"
      variant="outlined"
      startIcon={icon}
      endIcon={active ? <FilterChipCloseButton /> : <></>}
      sx={{
        minWidth: 'max-content',
        borderRadius: 2,
        borderColor: active ? 'custom.tint2' : 'white',
        borderWidth: 2,
        color: active ? 'custom.blackOnPrimary' : 'white',
        p: 1,
        '& .MuiChip-icon': { color: '#fff' },
        backgroundColor: active ? 'custom.tint1' : 'transparent',
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" color={active ? 'custom.blackOnPrimary' : 'white'}>
        {label}
      </Typography>
    </Button>
  );
}
