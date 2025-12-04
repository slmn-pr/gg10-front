import { Box, Card, Icon, Stack, Typography } from '@mui/material';

export default function UserStatsCard({
  title,
  icon,
  rankIcon,
  rank = 'لجند',
  value = '۵۰۰۰',
}) {
  return (
    <Card
      sx={{
        bgcolor: 'unset',
        backgroundImage: 'none',
        p: 1.5,
        borderRadius: 8,
        width: '30%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} mb={0.5}>
        <Typography variant="sub1" color="custom.tint4" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Icon color="#fff">{icon}</Icon>
      </Stack>

      <Box sx={{ bgcolor: 'custom.bg2', p: 1, borderRadius: 4 }}>
        <Box
          mt={1}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={rankIcon} alt={rank} width={60} height={60} />
          <Typography variant="sub3" fontWeight="bold" color="white">
            {rank}
          </Typography>
        </Box>

        <Typography variant="sub3" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
          {value} امتیاز
        </Typography>
      </Box>
    </Card>
  );
}
