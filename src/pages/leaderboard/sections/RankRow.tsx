import { Box, Stack, Typography } from '@mui/material';
import LeaderBoardIcon from '@/components/icons/navigation/LeaderBoard';
import { LeaderboardRowItem } from './leaderboard-types';

// import BronzeRank from '@/assets/icons/Rank icons/Bronze.svg';
// import SilverRank from '@/assets/icons/Rank icons/Silver.svg';
// import GoldRank from '@/assets/icons/Rank icons/Gold.svg';
// import LegendRank from '@/assets/icons/Rank icons/Legend.svg';

// const rankIcons = [LegendRank, GoldRank, SilverRank, BronzeRank];
// const rankColors = ['#18A0FB', '#DBB037', '#A3A6B0', '#A36640'];

interface RankRowProps {
  row: LeaderboardRowItem;
  isTopRank?: boolean;
}

export default function RankRow({ row, isTopRank = false }: RankRowProps) {
  //   const isTopRank = index < 3;

  return (
    <Box
      sx={{
        width: '100%',
        height: 74,
        bgcolor: '#1F1F1F',
        borderRadius: '8px',
        border: isTopRank
          ? '1px solid rgba(102, 212, 229, 0.48)'
          : '1px solid transparent',
        px: 1.5,
        display: 'grid',
        gridTemplateColumns: '66px minmax(0, 1fr) 82px',
        alignItems: 'center',
        columnGap: 0.75,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="flex-start" gap={0.75}>
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: '1px solid',
            // borderColor: rankColors[rankIndex],
            // color: rankColors[rankIndex],
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {/* <Typography variant="caption2" sx={{ fontWeight: isTopRank ? 700 : 400 }}>
            {index + 1}
          </Typography> */}
        </Box>


        
        {/* <Box
          component="img"
          src={rankIcons[rankIndex]}
          alt=""
          sx={{ width: 24, height: 24 }}
        /> */}
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        gap={1}
        sx={{ minWidth: 0 }}
      >
        <Typography
          variant="sub2"
          //   color={rankIndex === 0 ? 'custom.prize' : 'custom.whiteOnBg2'}
          noWrap
          sx={{ minWidth: 0 }}
        >
          {row.player.name}
        </Typography>
        <Box
          component="img"
          //   src={avatar}
          alt=""
          sx={{
            width: 48,
            height: 48,
            borderRadius: '8px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.6}>
        <Typography variant="sub2" color="custom.grey0">
          {row.rank}
        </Typography>
        {/* <LeaderBoardIcon color={rankColors[rankIndex]} width={20} height={20} /> */}
      </Stack>
    </Box>
  );
}
