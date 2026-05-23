import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate } from 'react-router-dom';
import ChevronBackward from '@/components/icons/ChevronBackward';
import BattleRoyalIcon from '@/components/icons/BattleRoyal';
import MultiPlayerIcon from '@/components/icons/MultiPlayer';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import BronzeRank from '@/assets/icons/Rank icons/Bronze.svg';
import GoldRank from '@/assets/icons/Rank icons/Gold.svg';
import SilverRank from '@/assets/icons/Rank icons/Silver.svg';
import LegendRank from '@/assets/icons/Rank icons/Legend.svg';

const profile = {
  gameName: 'amir_gamer',
  phone: '۰۹۱۲ ۳۴۴ ۳۶۴ ۶۵۱',
  userId: 'USR-AFV2A1',
  avatar: '/images/player_card_sample.png',
};

const rankRows = [
  {
    title: 'بتل رویال',
    Icon: BattleRoyalIcon,
    rate: '۴۲٪',
    score: '۱۲۵',
    medals: [
      { src: BronzeRank, count: '×3' },
      { src: SilverRank, count: '×1' },
      { src: GoldRank, count: '×2' },
      { src: LegendRank, count: null, disabled: true },
    ],
  },
  {
    title: 'مولتی پلیر',
    Icon: MultiPlayerIcon,
    rate: '۱۲٪',
    score: '۹۰',
    medals: [
      { src: BronzeRank, count: '×3' },
      { src: SilverRank, disabled: true },
      { src: GoldRank, disabled: true },
      { src: LegendRank, disabled: true },
    ],
  },
];

const quickCards = [
  {
    title: 'تاریخچه لابی‌ها',
    subtitle: 'مشاهده جزئیات لابی‌ها',
    icon: HistoryOutlinedIcon,
    path: '/user/profile/lobbies-history',
  },
  {
    title: 'تیم‌ها',
    subtitle: 'مدیریت تیم‌های شما',
    icon: GroupsOutlinedIcon,
    path: '/teams',
  },
];

const menuItems = [
  {
    title: 'تنظیمات امنیتی',
    subtitle: 'مدیریت تنظیمات ورود به حساب',
    icon: KeyOutlinedIcon,
    path: '/user/profile/security',
  },
  {
    title: 'دعوت از دوستان',
    subtitle: 'کسب درآمد با دعوت از دوستان',
    icon: PersonAddAltOutlinedIcon,
    path: '/user/profile/referral',
  },
  {
    title: 'پشتیبانی',
    subtitle: 'پاسخ‌دهی به سوالات و ابهامات شما',
    icon: HelpOutlineOutlinedIcon,
    path: '/user/profile/support',
  },
  {
    title: 'قوانین و مقررات',
    subtitle: 'بایدها و نبایدها',
    icon: PolicyOutlinedIcon,
    path: '/user/profile/rules',
  },
];

const Card = ({ children, sx }) => (
  <Box
    sx={{
      bgcolor: 'custom.bg2',
      borderRadius: '8px',
      ...sx,
    }}
  >
    {children}
  </Box>
);

const Medal = ({ src, count, disabled }) => (
  <Stack alignItems="center" gap={0.25} sx={{ minWidth: 18 }}>
    <Box
      component="img"
      src={src}
      alt=""
      sx={{
        width: 18,
        height: 18,
        opacity: disabled ? 0.22 : 1,
        filter: disabled ? 'grayscale(1) brightness(0.45)' : 'none',
      }}
    />
    {count && (
      <Typography variant="caption2" color="custom.white" sx={{ lineHeight: '12px' }}>
        {count}
      </Typography>
    )}
  </Stack>
);

const RankRow = ({ title, Icon, rate, score, medals }) => (
  <Box>
    <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.75} mb={1.5}>
      <Typography variant="sub2" color="primary.light">
        {title}
      </Typography>
      <Icon color="#FF3F7C" width={20} height={20} />
    </Stack>

    <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
      <Stack direction="row" alignItems="flex-start" gap={0.4}>
        {medals.map((medal, index) => (
          <Medal key={`${title}-${index}`} {...medal} />
        ))}
      </Stack>

      <Stack direction="row" gap={4.8} sx={{ pr: 0.6 }}>
        <Stack alignItems="flex-end" gap={0.2}>
          <Typography variant="caption1" color="custom.white">
            {rate}
          </Typography>
          <Typography variant="caption1" color="custom.white">
            نرخ برد
          </Typography>
        </Stack>
        <Stack alignItems="flex-end" gap={0.2}>
          <Typography variant="caption1" color="custom.white">
            {score}
          </Typography>
          <Typography variant="caption1" color="custom.white">
            لابی
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);

const QuickCard = ({ title, subtitle, icon: Icon, onClick }) => (
  <Card
    sx={{
      flex: 1,
      height: 122,
      p: 2,
      cursor: 'pointer',
      '&:hover': { bgcolor: 'custom.grey6' },
    }}
  >
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        all: 'unset',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
      }}
    >
    <Stack alignItems="flex-end" justifyContent="center" sx={{ height: '100%' }} gap={1}>
      <Stack direction="row" alignItems="center" gap={0.45}>
        <Typography variant="title3" color="custom.white">
          {title}
        </Typography>
        <Icon sx={{ color: 'custom.white', fontSize: 22 }} />
      </Stack>
      <Typography variant="caption1" color="custom.grey0">
        {subtitle}
      </Typography>
    </Stack>
    </Box>
  </Card>
);

const MenuRow = ({ title, subtitle, icon: Icon, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      dir="ltr"
      fullWidth
      onClick={onClick}
      sx={{
        height: 74,
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        px: 2,
        color: 'custom.white',
        justifyContent: 'space-between',
        '&:hover': { bgcolor: 'custom.grey6' },
      }}
    >
      <ChevronBackward color={theme.palette.custom.white} />
      <Stack alignItems="flex-end" sx={{ minWidth: 0, flex: 1, mx: 1.2 }}>
        <Typography variant="title3" color="custom.white" noWrap>
          {title}
        </Typography>
        <Typography variant="caption1" color="custom.grey1" noWrap>
          {subtitle}
        </Typography>
      </Stack>
      <Icon sx={{ color: 'custom.white', fontSize: 22, flexShrink: 0 }} />
    </Button>
  );
};

export default function UserProfilePage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        overflowX: 'hidden',
        px: 2,
        pt: 2.5,
        pb: 11,
      }}
    >
      <Card sx={{ height: 82, p: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: '100%', minWidth: 0 }}
        >
          <Button
            variant="outlined"
            onClick={() => navigate('/user/profile/edit')}
            sx={{
              width: 164,
              flexShrink: 0,
              height: 37,
              borderRadius: '8px',
              color: 'custom.white',
              borderColor: 'custom.white',
              fontSize: theme.typography.button2.fontSize,
              '&:hover': {
                borderColor: 'custom.white',
                bgcolor: 'custom.grey6',
              },
            }}
          >
            ویرایش پروفایل
          </Button>

          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ minWidth: 0, maxWidth: 145, overflow: 'hidden' }}
          >
            <Stack alignItems="flex-end" sx={{ minWidth: 0, flex: 1 }}>
              <Typography variant="sub1" color="custom.white" noWrap sx={{ lineHeight: '24px' }}>
                {profile.gameName}
              </Typography>
              <Typography variant="caption2" color="custom.grey0" noWrap>
                {profile.phone}
              </Typography>
              <Typography variant="caption2" color="custom.grey0" noWrap>
                {profile.userId}
              </Typography>
            </Stack>
            <Box
              component="img"
              src={profile.avatar}
              alt=""
              sx={{
                width: 52,
                flexShrink: 0,
                height: 52,
                borderRadius: '6px',
                objectFit: 'cover',
                bgcolor: 'custom.grey6',
              }}
            />
          </Stack>
        </Stack>
      </Card>

      <Card sx={{ p: 1.5, minHeight: 273, mt: 2 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2.1}>
          <Typography variant="sub2" color="custom.linkBlue">
            راهنما
          </Typography>
          <Typography variant="title3" color="custom.white">
            آمار و تاریخچه رنک‌ها
          </Typography>
        </Stack>

        <Stack gap={3.5}>
          {rankRows.map((row) => (
            <RankRow key={row.title} {...row} />
          ))}
        </Stack>
      </Card>

      <Stack direction="row" gap={2} mt={2}>
        {quickCards.map((item) => (
          <QuickCard key={item.title} {...item} onClick={() => navigate(item.path)} />
        ))}
      </Stack>

      <Stack gap={2.5} mt={2.5}>
        {menuItems.map((item) => (
          <MenuRow key={item.title} {...item} onClick={() => navigate(item.path)} />
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 110 }} />

      <Stack alignItems="center" gap={1.5}>
        <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
          <Divider sx={{ flex: 1, borderColor: 'custom.grey4' }} />
          <Typography variant="sub2" color="custom.white" sx={{ px: 1.2 }}>
            GG10 در شبکه‌های اجتماعی
          </Typography>
          <Divider sx={{ flex: 1, borderColor: 'custom.grey4' }} />
        </Stack>

        <Stack direction="row" gap={1.5}>
          <IconButton
            sx={{
              width: 32,
              height: 32,
              bgcolor: '#E1306C',
              backgroundImage: 'linear-gradient(135deg, #F9CE34, #EE2A7B 55%, #6228D7)',
              '&:hover': { bgcolor: '#E1306C' },
            }}
          >
            <InstagramIcon sx={{ color: 'custom.white', fontSize: 20 }} />
          </IconButton>
          <IconButton
            sx={{
              width: 32,
              height: 32,
              bgcolor: '#2AABEE',
              '&:hover': { bgcolor: '#2AABEE' },
            }}
          >
            <TelegramIcon sx={{ color: 'custom.white', fontSize: 20 }} />
          </IconButton>
        </Stack>
      </Stack>

      <BottomNav />
    </Stack>
  );
}
