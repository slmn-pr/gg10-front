import { Box, Stack, Typography, useTheme } from '@mui/material';
import UserStatsCard from '../components/UserStatsCard';

import WorkspacePremiumRoundedIcon from '@/assets/icons/rank/legend.svg';
import MultiPLayerIcon from '@/assets/icons/game-mode/multi-player.svg';
import GoldBigIcon from '@/assets/icons/Rank icons/Gold_bigsize.svg';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';

export default function UserStats() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ px: 1 }}
      bgcolor="custom.bg1"
      width="100%"
    >
      {/* Multiplayer Stats */}
      <UserStatsCard
        title="مولتی پلیر"
        icon={<MultiPlayerIcon color={theme.palette.primary.main} />}
        rank="لجند"
        value="۱۰۰۰۰"
        rankIcon={WorkspacePremiumRoundedIcon}
      />

      {/* Avatar */}
      <Stack alignItems="center" sx={{ mt: -2 }}>
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
            src="https://i.pravatar.cc/150?img=11"
            alt="User Avatar"
            style={{ borderRadius: 8 }}
            width={120}
            height={120}
          />
          <Typography variant="body2" color="white" fontWeight="bold" sx={{ mt: 1 }}>
            amir_gamer
          </Typography>
        </Box>
      </Stack>

      {/* Battle Royale Stats */}
      <UserStatsCard
        title="بتل رویال"
        rankIcon={GoldBigIcon}
        icon={<BattleRoyalIcon color={theme.palette.primary.main} />}
        rank="آماتور"
        value="۱۰۰ امتیاز"
      />
    </Stack>
  );
}
