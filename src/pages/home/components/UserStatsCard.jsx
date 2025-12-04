import { Box, Card, Icon, Stack, SvgIcon, Typography } from '@mui/material';

const RANK_MAP = {
  legend: {
    color: '#66D4E5',
    title: 'لجند',
  },
  gold: {
    color: '#9A7D26',
    title: 'گلد',
  },
  silver: {
    color: '#C0C0C0',
    title: 'سیلور',
  },
  bronze: {
    color: '#A97142',
    title: 'برونز',
  },
};

export default function UserStatsCard({
  title,
  icon,
  rankIcon,
  rank = RANK_MAP.legend.title,
  value = 5000,
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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        mb={0.5}
      >
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
          {rankIcon}
          <Typography variant="sub2" fontWeight="bold" color={RANK_MAP.legend.color}>
            {rank}
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          <Typography variant="sub3" color={RANK_MAP.legend.color}>
            امتیاز
          </Typography>
          <Typography variant="sub3" color={RANK_MAP.legend.color}>
            {value}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
