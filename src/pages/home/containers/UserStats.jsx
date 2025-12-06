import { Box, Stack, SvgIcon, Typography, useTheme } from '@mui/material';
import UserStatsCard from '../components/UserStatsCard';

import WorkspacePremiumRoundedIcon from '@/assets/icons/rank/legend.svg';
import MultiPLayerIcon from '@/assets/icons/game-mode/multi-player.svg';
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
      sx={{ px: 0.5, py: 1 }}
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
      <Stack alignItems="center" sx={{ p: 2 }}>
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
            width={120}
            height={120}
          />
          <Typography variant="sub2" color="custom.whiteOnBg1" fontWeight="bold">
            amir_gamer
          </Typography>
        </Box>
      </Stack>

      {/* Battle Royale Stats */}
      <UserStatsCard
        title="بتل رویال"
        rankIcon={<GoldBigIcon />}
        icon={<BattleRoyalIcon color={theme.palette.primary.main} />}
        rank="آماتور"
        randCode={2}
        value="100"
      />
    </Stack>
  );
}
