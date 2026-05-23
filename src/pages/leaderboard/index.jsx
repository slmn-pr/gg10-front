import {
  Box,
  Button,
  Divider,
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

  return (
    <Box
      sx={{
        height: 64,
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        px: 1,
        display: 'grid',
        gridTemplateColumns: '52px 1fr 76px',
        alignItems: 'center',
        columnGap: 1,
      }}
    >
      <Stack direction="row" alignItems="center" gap={0.75}>
        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            border: '1px solid',
            borderColor: rankColors[rankIndex],
            color: rankColors[rankIndex],
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <Typography variant="caption2">{index + 1}</Typography>
        </Box>
        <Box component="img" src={rankIcons[rankIndex]} alt="" sx={{ width: 20, height: 20 }} />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={1} sx={{ minWidth: 0 }}>
        <Typography
          variant="caption1"
          color={rankIndex === 0 ? 'custom.prize' : 'custom.white'}
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
            width: 36,
            height: 36,
            borderRadius: '6px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.6}>
        <Typography variant="caption1" color="custom.grey0">
          {score}
        </Typography>
        <LeaderBoardIcon color={rankColors[rankIndex]} />
      </Stack>
    </Box>
  );
};

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
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        px: 2,
        pt: 2,
        pb: 12,
      }}
      gap={2}
    >
      <Box
        sx={{
          position: 'relative',
          height: 121,
          borderRadius: '8px',
          overflow: 'hidden',
          bgcolor: '#3A0049',
          background: 'linear-gradient(135deg, #3A0049 0%, #3A0049 58%, #FF6F97 58%, #7B28FF 100%)',
        }}
      >
        <Box
          component="img"
          src={playerAvatar}
          alt=""
          sx={{
            position: 'absolute',
            right: 18,
            bottom: 0,
            width: 122,
            height: 122,
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
        <Stack
          alignItems="flex-end"
          gap={0.75}
          sx={{ position: 'relative', zIndex: 1, pt: 1.8, px: 2, width: 222 }}
        >
          <Typography variant="title3" color="custom.white" textAlign="right">
            در فصل رتبه‌بندی شرکت کن
          </Typography>
          <Typography variant="caption2" color="custom.white" textAlign="right" lineHeight={1.7}>
            با شرکت در لابی‌های رتبه‌بندی، امتیاز بگیر و به سطح لجند برس.
          </Typography>
          <Button
            sx={{
              position: 'absolute',
              top: 82,
              right: 16,
              height: 30,
              minWidth: 126,
              bgcolor: 'primary.main',
              color: 'custom.white',
              borderRadius: '4px',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            شروع مسابقه
          </Button>
        </Stack>
      </Box>

      <GameModeSelector value={mode} onChange={setMode} />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Button
          onClick={() => setShowGuide(true)}
          sx={{ color: 'custom.linkBlue', minWidth: 0, px: 0.5 }}
        >
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Typography variant="caption1">راهنمای رتبه‌بندی</Typography>
            <InfoOutlinedIcon sx={{ fontSize: 18 }} />
          </Stack>
        </Button>
        <Stack direction="row" alignItems="center" gap={0.75}>
          <Typography variant="sub1" color="custom.white">
            لیدربرد فصل
          </Typography>
          <ModeIcon color="#FF3F7C" width={20} height={20} />
        </Stack>
      </Stack>

      <Stack gap={1.25}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ px: 1, color: 'custom.grey0' }}
        >
          <Typography variant="caption1" sx={{ width: 68 }}>
            امتیاز
          </Typography>
          <Typography variant="caption1" sx={{ flex: 1, textAlign: 'right' }}>
            بازیکن
          </Typography>
          <Typography variant="caption1" sx={{ width: 52, textAlign: 'right' }}>
            رتبه
          </Typography>
        </Stack>
        <Divider sx={{ borderColor: 'custom.grey5' }} />
        {leaderboardRows[mode].map((row, index) => (
          <RankRow key={`${mode}-${row[0]}`} row={row} index={index} />
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 80 }} />
      <BottomNav />
      {showGuide && <GuideSheet onClose={() => setShowGuide(false)} />}
    </Stack>
  );
}
