import Badge from '@mui/material/Badge';

const colorMap = {
  success: '#4CE8C9',
  info: '#8E7CFF',
  warning: '#FFB74D',
  danger: '#FF6B6B',
};

const MDBadge = ({ tone = 'info', children, label }) => (
  <Badge
    badgeContent={label}
    overlap="circular"
    sx={{
      '& .MuiBadge-badge': {
        background: colorMap[tone] ?? colorMap.info,
        color: '#03050A',
        fontSize: '0.65rem',
        fontWeight: 700,
        minWidth: 22,
        height: 22,
        borderRadius: '999px',
      },
    }}
  >
    {children}
  </Badge>
);

export default MDBadge;
