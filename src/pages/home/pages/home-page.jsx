import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import AccessTimeRoundedIcon from '@/assets/icons/lobby-card/time.svg';
import FilterListRoundedIcon from '@/assets/icons/chips/filter.svg';
import AutoModeRoundedIcon from '@/assets/icons/chips/auto-revive.svg';
import GroupsRoundedIcon from '@/assets/icons/chips/squad.svg';
import ShieldRoundedIcon from '@/assets/icons/chips/placement.svg';
import ParaglidingRoundedIcon from '@/assets/icons/game-mode/battle-royal.svg';
import WorkspacePremiumRoundedIcon from '@/assets/icons/rank/legend.svg';
import ExpandChevronIcon from '@/assets/icons/general/chevron-back.svg';
import bg1 from '@/assets/images/lobby/bg-hero.png';

import MultiPLayerIcon from '@/assets/icons/game-mode/multi-player.svg';
import GoldBigIcon from '@/assets/icons/Rank icons/Gold_bigsize.svg';

import LobbyCard from '../components/lobby-card.jsx';
import { CardHeader } from '@mui/material';
import UserStatsCard from '../components/UserStatsCard.jsx';

const SvgIcon = ({ src, sx, ...props }) => (
  <Box
    component="img"
    src={src}
    sx={{
      width: '1em',
      height: '1em',
      display: 'inline-block',
      verticalAlign: 'middle',
      ...sx,
    }}
    {...props}
  />
);

const UserStats = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{ mb: 2, px: 1 }}
    bgcolor="custom.bg1"
    width="100%"
  >
    {/* Multiplayer Stats */}
    <UserStatsCard
      title="مولتی پلیر"
      icon={MultiPLayerIcon}
      rank="لجند"
      value="۱۰۰۰۰"
      rankIcon={WorkspacePremiumRoundedIcon}
    />

    {/* Avatar */}
    <Stack alignItems="center" sx={{ mt: -2 }}>
      {/* <Avatar
        src=""
        sx={{
          width: 100,
          height: 100,
          border: '2px solid #151826',
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        }}
      /> */}

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
      icon={GoldBigIcon}
      rank="آماتور"
      value="۱۰۰ امتیاز"
    />
  </Stack>
);

const Banner = () => (
  <Card
    sx={{
      mb: 3,
      borderRadius: 4,
      overflow: 'hidden',
      position: 'relative',
      height: 160,
      backgroundImage: `url(${bg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        textAlign: 'center',
      }}
    >
      {/* Dots */}
      <Stack direction="row" spacing={0.5} sx={{ position: 'absolute', bottom: 10 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <Box
            key={i}
            sx={{
              width: i === 2 ? 8 : 6,
              height: i === 2 ? 8 : 6,
              borderRadius: '50%',
              bgcolor: i === 2 ? '#FF0055' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </Stack>
    </Box>
  </Card>
);

const GameModeSelector = () => (
  <Stack
    direction="row"
    spacing={0}
    sx={{ mb: 2, bgcolor: '#151826', borderRadius: 3, p: 0.5 }}
  >
    <Button
      fullWidth
      variant="contained"
      startIcon={<SvgIcon src={ShieldRoundedIcon} />}
      sx={{
        bgcolor: '#FFB4AB',
        color: '#000',
        borderRadius: 2.5,
        '&:hover': { bgcolor: '#FFB4AB' },
        py: 1,
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      مولتی پلیر
    </Button>
    <Button
      fullWidth
      startIcon={<SvgIcon src={ParaglidingRoundedIcon} sx={{ color: '#fff' }} />}
      sx={{
        color: '#fff',
        borderRadius: 2.5,
        py: 1,
        fontSize: '1rem',
      }}
    >
      بتل رویال
    </Button>
  </Stack>
);

const Filters = () => (
  <Stack direction="row" spacing={1} sx={{ mb: 3, overflowX: 'auto', pb: 1 }}>
    <Chip
      icon={<SvgIcon src={FilterListRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="فیلترها"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={AccessTimeRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="کیلی"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={AutoModeRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="اتوریوایو"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
    <Chip
      icon={<SvgIcon src={GroupsRoundedIcon} sx={{ width: 16, height: 16 }} />}
      label="اسکوادی"
      variant="outlined"
      sx={{
        borderRadius: 2,
        borderColor: '#2B2E40',
        color: '#fff',
        '& .MuiChip-icon': { color: '#fff' },
      }}
    />
  </Stack>
);

const HomePage = () => {
  const [myLobbiesExpanded, setMyLobbiesExpanded] = React.useState(true);
  const [allLobbiesExpanded, setAllLobbiesExpanded] = React.useState(true);

  return (
    <Box sx={{ pb: 4, px: 0 }}>
      {/* USer status */}
      <UserStats />

      {/* Banner slider */}
      <Banner />

      {/* Game mode selector */}
      <GameModeSelector />

      {/* Filters */}
      <Filters />

      {/* My Lobbies Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            لابی‌های شما
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ۲ لابی
          </Typography>
        </Stack>
        <IconButton
          size="small"
          onClick={() => setMyLobbiesExpanded(!myLobbiesExpanded)}
          sx={{ color: 'text.secondary' }}
        >
          <SvgIcon
            src={ExpandChevronIcon}
            sx={{
              width: 20,
              height: 20,
              transform: myLobbiesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          />
        </IconButton>
      </Stack>

      {myLobbiesExpanded && (
        <>
          <LobbyCard
            title="آیزولیتد ۴۰ نفره جایگاهی"
            status="در حال ثبت نام"
            entryFee="۱۰۰,۰۰۰ تومن"
            prize="۱۰,۰۰۰,۰۰۰ تومن"
            currentPlayers={30}
            maxPlayers={40}
            isRegistered={true}
            isVip={true}
          />
          <LobbyCard
            title="آیزولیتد ۴۰ نفره جایگاهی"
            status="تکمیل ظرفیت"
            entryFee="۱۰۰,۰۰۰ تومن"
            prize="۱۰,۰۰۰,۰۰۰ تومن"
            currentPlayers={40}
            maxPlayers={40}
            isFull={true}
            isVip={false}
          />
        </>
      )}

      {/* All Lobbies Section */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2, mt: 4 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            فهرست همه لابی‌ها
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ۴ لابی
          </Typography>
        </Stack>
      </Stack>

      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={30}
        maxPlayers={40}
        isVip={true}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={35}
        maxPlayers={40}
        isVip={false}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={38}
        maxPlayers={40}
        isVip={false}
      />
      <LobbyCard
        title="آیزولیتد ۴۰ نفره جایگاهی"
        status="در حال برگزاری"
        entryFee="۱۰۰,۰۰۰ تومن"
        prize="۱۰,۰۰۰,۰۰۰ تومن"
        currentPlayers={25}
        maxPlayers={40}
        isVip={true}
      />
    </Box>
  );
};

export default HomePage;
