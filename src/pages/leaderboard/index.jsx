import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import GameModeSelector from '@/components/game-mode-selector.jsx';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import LeaderBoardIcon from '@/components/icons/navigation/LeaderBoard';
import leaderboardBanner from '@/assets/images/image 17.png';
import playerAvatar from '@/assets/images/Lobbies card avatar.png';
import agentAvatar from '@/assets/images/photo_2025-11-16_17-02-55 1.png';
import skullAvatar from '@/assets/images/photo_2025-11-12_16-12-31 2.png';
import BronzeRank from '@/assets/icons/Rank icons/Bronze.svg';
import SilverRank from '@/assets/icons/Rank icons/Silver.svg';
import GoldRank from '@/assets/icons/Rank icons/Gold.svg';
import LegendRank from '@/assets/icons/Rank icons/Legend.svg';

const rankIcons = [LegendRank, GoldRank, SilverRank, BronzeRank];

const leaderboardRows = {
  'battle-royal': [
    ['Ghost_player_2024', '۶۵۰۰', playerAvatar, 0],
    ['amir_gamer', '۲۳۰۰', agentAvatar, 1],
    ['Player_Pro68', '۱۷۵۰', skullAvatar, 2],
    ['Toxic_gaming', '۹۵۰', playerAvatar, 3],
    ['shadow_fighter', '۷۲۰', agentAvatar, 3],
  ],
  multiplayer: [
    ['MP_Runner', '۴۸۰۰', skullAvatar, 0],
    ['amir_gamer', '۲۹۰۰', agentAvatar, 1],
    ['Sniper_10v10', '۲۱۰۰', playerAvatar, 2],
    ['Ranked_Hero', '۱۲۰۰', skullAvatar, 3],
    ['NinjaSquad', '۸۵۰', playerAvatar, 3],
  ],
};

const rankColors = ['#18A0FB', '#DBB037', '#A3A6B0', '#A36640'];

const RankRow = ({ row, index }) => {
  const [name, score, avatar, rankIndex] = row;
  const isTopRank = index < 3;

  return (
    <Box
      sx={{
        width: '100%',
        height: 74,
        bgcolor: '#1F1F1F',
        borderRadius: '8px',
        border: index === 0 ? '1px solid rgba(102, 212, 229, 0.48)' : '1px solid transparent',
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
            borderColor: rankColors[rankIndex],
            color: rankColors[rankIndex],
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Typography variant="caption2" sx={{ fontWeight: isTopRank ? 700 : 400 }}>
            {index + 1}
          </Typography>
        </Box>
        <Box component="img" src={rankIcons[rankIndex]} alt="" sx={{ width: 24, height: 24 }} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={1} sx={{ minWidth: 0 }}>
        <Typography
          variant="sub2"
          color={rankIndex === 0 ? 'custom.prize' : 'custom.whiteOnBg2'}
          noWrap
          sx={{ minWidth: 0 }}
        >
          {name}
        </Typography>
        <Box
          component="img"
          src={avatar}
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
          {score}
        </Typography>
        <LeaderBoardIcon color={rankColors[rankIndex]} width={20} height={20} />
      </Stack>
    </Box>
  );
};

const NotLoggedInCta = () => (
  <Stack
    alignItems="center"
    justifyContent="center"
    gap={1}
    sx={{
      width: '100%',
      height: 114,
      py: '17px',
      borderTop: '1px solid #020202',
      borderBottom: '1px solid #020202',
      bgcolor: 'custom.bg1',
    }}
  >
    <Typography variant="sub2" color="custom.grey0" textAlign="center">
      برای مشاهده رتبه خود وارد حساب کاربری شوید
    </Typography>
    <Button
      variant="contained"
      sx={{
        width: 144,
        height: 40,
        bgcolor: 'primary.main',
        color: 'custom.white',
        borderRadius: '8px',
        boxShadow: 'none',
        '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' },
      }}
    >
      <Typography variant="button2">ورود / ثبت نام</Typography>
    </Button>
  </Stack>
);

const GuideSheet = ({ onClose }) => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: 1400,
      bgcolor: 'rgba(0,0,0,0.58)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        width: 'min(440px, 100vw)',
        maxHeight: '78vh',
        overflowY: 'auto',
        bgcolor: 'custom.bg1',
        borderRadius: '8px 8px 0 0',
        px: 2,
        pt: 2,
        pb: 4,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <IconButton onClick={onClose} sx={{ color: 'custom.white' }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="title3" color="custom.white">
          راهنمای رتبه‌ها
        </Typography>
      </Stack>

      <Stack gap={2} alignItems="flex-end">
        {[
          ['رتبه بازیکن چیست؟', 'رتبه براساس امتیاز عملکرد شما در لابی‌های رتبه‌بندی محاسبه می‌شود.'],
          ['امتیاز چطور محاسبه می‌شود؟', 'برد، جایگاه نهایی، تعداد حضور موفق و قوانین هر مود روی امتیاز اثر می‌گذارد.'],
          ['سطوح رنک', 'بازیکن‌ها در سطح‌های برنز، سیلور، گلد و لجند دسته‌بندی می‌شوند.'],
          ['پایان فصل', 'در پایان هر فصل، رتبه‌ها ثبت و فصل بعد با شرایط جدید شروع می‌شود.'],
        ].map(([title, body]) => (
          <Stack key={title} gap={0.6} alignItems="flex-end">
            <Typography variant="sub1" color="custom.white">
              {title}
            </Typography>
            <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={1.9}>
              {body}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  </Box>
);

export default function LeaderboardPage() {
  const [mode, setMode] = useState('battle-royal');
  const [showGuide, setShowGuide] = useState(false);
  const ModeIcon = mode === 'battle-royal' ? BattleRoyalIcon : MultiPlayerIcon;

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        pt: 1,
        pb: 10,
      }}
      gap={0}
      alignItems="center"
    >
      <Box
        component="img"
        src={leaderboardBanner}
        alt=""
        sx={{
          width: 'calc(100% - 32px)',
          height: 120,
          borderRadius: '8px',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      <Box sx={{ width: 'calc(100% - 32px)', mt: 3 }}>
        <GameModeSelector value={mode} onChange={setMode} />
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: 'calc(100% - 73px)',
          height: 24,
          mt: 1.75,
        }}
      >
        <Button
          onClick={() => setShowGuide(true)}
          sx={{
            color: 'custom.linkBlue',
            minWidth: 0,
            p: 0,
            height: 24,
          }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Typography variant="caption1">راهنمای رتبه‌بندی</Typography>
            <InfoOutlinedIcon sx={{ fontSize: 18 }} />
          </Stack>
        </Button>
        <Stack direction="row" alignItems="center" gap={0.75}>
          <Typography variant="sub1" color="custom.white">
            لیدربرد
          </Typography>
          <ModeIcon color="#FF3F7C" width={20} height={20} />
        </Stack>
      </Stack>

      <Box sx={{ mt: 3.125, width: '100%' }}>
        <NotLoggedInCta />
      </Box>

      <Stack sx={{ width: 'calc(100% - 32px)', mt: 4 }} gap={1}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            height: 32,
            px: 1.5,
            color: 'custom.grey0',
            bgcolor: 'transparent',
          }}
        >
          <Typography variant="caption1" sx={{ width: 82 }}>
            امتیاز
          </Typography>
          <Typography variant="caption1" sx={{ flex: 1, textAlign: 'right' }}>
            بازیکن
          </Typography>
          <Typography variant="caption1" sx={{ width: 66, textAlign: 'right' }}>
            رتبه
          </Typography>
        </Stack>
        {leaderboardRows[mode].map((row, index) => (
          <RankRow key={`${mode}-${row[0]}`} row={row} index={index} />
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 24 }} />
      <BottomNav />
      {showGuide && <GuideSheet onClose={() => setShowGuide(false)} />}
    </Stack>
  );
}
