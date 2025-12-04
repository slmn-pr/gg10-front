import { Button, Chip, SvgIcon, Typography } from '@mui/material';

export default function FilterChip({ onClick, label, icon }) {
  return (
    <Button
      size="large"
      variant="outlined"
      endIcon={icon}
      sx={{
        borderRadius: 2,
        borderColor: 'white',
        borderWidth: 2,
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
      onClick={onClick}
    >
      <Typography variant="subtitle2" color="white">
        {label}
      </Typography>
    </Button>
  );
}
