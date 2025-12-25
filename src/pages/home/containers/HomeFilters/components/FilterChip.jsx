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
        // Prevent drag from interfering with button clicks
        touchAction: 'manipulation',
        // Ensure button is clickable
        pointerEvents: 'auto',
      }}
      onClick={onClick}
      // Prevent drag propagation to parent
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
    >
      <Typography variant="subtitle2" color={active ? 'custom.blackOnPrimary' : 'white'}>
        {label}
      </Typography>
    </Button>
  );
}
