import Chip from '@mui/material/Chip';

const MDChip = ({ selected = false, ...props }) => (
  <Chip
    size="medium"
    variant={selected ? 'filled' : 'outlined'}
    color={selected ? 'primary' : 'default'}
    sx={{
      borderRadius: (theme) => theme.shape.custom.small,
      fontWeight: 600,
      px: 1,
    }}
    {...props}
  />
);

export default MDChip;
