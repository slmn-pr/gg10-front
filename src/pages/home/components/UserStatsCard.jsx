import { Box, Card, Icon, Stack, Typography } from '@mui/material';


export default function UserStatsCard({ title, icon, rankIcon, rank = 'لجند', value = '۵۰۰۰' }) {
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
      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
        <Typography variant="h5" color="error.main" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Icon color="#fff">
          <img src={icon} alt={title} width={20} height={20} />
        </Icon>
      </Stack>

      <Box sx={{ bgcolor: 'custom.bg2', p: 1, borderRadius: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={rankIcon} alt={rank} width={60} height={60} />
        </Box>

        <Typography variant="subtitle2" fontWeight="bold" color="white">
          {rank}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.65rem' }}>
          {value} امتیاز
        </Typography>
      </Box>
    </Card>
  );
}
