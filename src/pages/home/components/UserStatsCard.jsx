import { Box, Card, Icon, Stack, Typography } from '@mui/material';

// RANK CODE GUIDE
// 1: Legend
// 2: Gold
// 3: Silver
// 4: Bronze

export default function UserStatsCard({ title, icon, rankIcon, value,rankColor }) {
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
            {title}
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
