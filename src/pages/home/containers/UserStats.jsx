import { Box, Stack, Typography, useTheme } from '@mui/material';
import UserStatsCard from '../components/UserStatsCard';

import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import UserAvatarImage from '@/assets/images/photo_2025-11-16_17-02-55 1.png';
import useUserStore from '@/store/user-store';
import NotLoggedInCta from '@/components/NotLoginCta';
import { getRankByPoints } from '@/utils/rankTier';

export default function UserStats() {
  const theme = useTheme();
  const { logged_in, user } = useUserStore();

  if (!logged_in) return <NotLoggedInCta />;

  const multiplayerRank = getRankByPoints(user?.multiplayer_rank_points);
  const battleRoyaleRank = getRankByPoints(user?.battle_rank_points);

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
        value={user?.multiplayer_rank_points}
        rankIcon={multiplayerRank.icon}
        rankTitle={multiplayerRank.title}
        rankColor={multiplayerRank.color}
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
            src={user?.avatar_url ?? UserAvatarImage}
            alt="User Avatar"
            style={{ borderRadius: 8 }}
            width={100}
            height={100}
          />
          <Typography variant="sub2" color="custom.whiteOnBg1">
            {user?.username}
          </Typography>
        </Box>
      </Stack>

      {/* Battle Royale Stats */}
      <UserStatsCard
        title="بتل رویال"
        icon={<BattleRoyalIcon color={theme.palette.primary.main} />}
        value={user?.battle_rank_points}
        rankIcon={battleRoyaleRank.icon}
        rankTitle={battleRoyaleRank.title}
        rankColor={battleRoyaleRank.color}
      />
    </Stack>
  );
}
