import { Box, Stack, Typography, useTheme } from '@mui/material';
import UserStatsCard from '../components/UserStatsCard';

import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import LegendRankIcon from '@/components/icons/rank/LegendRankIcon';
import GoldBigIcon from '@/components/icons/rank/GoldBigIcon';
import UserAvatarImage from '@/assets/images/photo_2025-11-16_17-02-55 1.png';

export default function UserStats() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="end"
      sx={{ px: 0.5 }}
      bgcolor="custom.bg1"
      width="100%"
    >
      {/* Multiplayer Stats */}
      <UserStatsCard
        title="مولتی پلیر"
        icon={<MultiPlayerIcon color={theme.palette.primary.main} />}
        rank="لجند"
        value="1000"
        rankIcon={<LegendRankIcon />}
      />

      {/* Avatar */}
      <Stack alignItems="center">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <img
            src={UserAvatarImage}
            alt="User Avatar"
            style={{ borderRadius: 8 }}
            width={100}
            height={100}
          />
          <Typography variant="sub2" color="custom.whiteOnBg1">
            amir_gamer
          </Typography>
        </Box>
      </Stack>

      {/* Battle Royale Stats */}
      <UserStatsCard
        rankIcon={<GoldBigIcon />}
        icon={<BattleRoyalIcon color={theme.palette.primary.main} />}
        randCode={2}
        value="100"
        title={"بتل رویال"}
      />
    </Stack>
  );
}
