import { RANK_CODE_MAP } from '@/consts';
import { Box, Card, Icon, Stack, SvgIcon, Typography } from '@mui/material';


// RANK CODE GUIDE
// 1: Legend
// 2: Gold
// 3: Silver
// 4: Bronze

export default function UserStatsCard({
  title,
  icon,
  rankIcon,
  randCode = 1,
  value = 5000,
}) {
  const rankTitle = RANK_CODE_MAP[randCode].title;
  const rankColor = RANK_CODE_MAP[randCode].color;

  return (
    <Card
      sx={{
        bgcolor: 'unset',
        backgroundImage: 'none',
        // padding: 1,
        borderRadius: 2,
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
          <Typography variant="sub2" fontWeight="bold" color={rankColor}>
            {rankTitle}
          </Typography>
        </Box>

        <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
          <Typography variant="sub3" color={rankColor}>
            امتیاز
          </Typography>
          <Typography variant="sub3" color={rankColor}>
            {value}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
}
