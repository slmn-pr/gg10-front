import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronBackward from '@/components/icons/ChevronBackward';
import ChevronForward from '@/components/icons/ChevronForward';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import GameModeSelector from '@/components/game-mode-selector.jsx';
import skullAvatar from '@/assets/images/photo_2025-11-12_16-12-31 2.png';
import agentAvatar from '@/assets/images/photo_2025-11-16_17-02-55 1.png';
import lobbyAvatar from '@/assets/images/Lobbies card avatar.png';
import referralFigma from '@/assets/images/account-referral-figma.png';
import EntryFeeIcon from '@/assets/icons/Lobbies cards icons/entry_fee.svg';
import PrizeIcon from '@/assets/icons/Lobbies cards icons/prize.svg';

const profile = {
  gameName: 'amir_gamer',
  phone: '۰۹۱۲ ۳۴۴ ۳۶۴ ۶۵۱',
  userId: 'USR-AFV2A1',
  avatar: '/images/player_card_sample.png',
};

const avatars = [
  skullAvatar,
  lobbyAvatar,
  agentAvatar,
  '/images/player_card_sample.png',
  agentAvatar,
  skullAvatar,
  lobbyAvatar,
  '/images/player_card_sample.png',
];

const lobbyHistory = {
  battleRoyal: Array.from({ length: 4 }, (_, index) => ({
    id: `br-${index}`,
    title: 'آئرولایت ۴۰ نفره جایگاهی',
    image: lobbyAvatar,
    date: '۱۴۰۴/۱۱/۱۱',
    time: '۱۲:۳۰',
    entry: 'ورودی پرداخت‌شده: ۱۰۰,۰۰۰ تومان',
    prize: 'جوایز دریافتی: ۱۵۰,۰۰۰ تومان + ۵۰ امتیاز رنک',
  })),
  multiplayer: Array.from({ length: 3 }, (_, index) => ({
    id: `mp-${index}`,
    title: 'مولتی پلیر | 3v3 جایگاهی',
    image: lobbyAvatar,
    date: '۱۴۰۴/۱۱/۰۹',
    time: '۱۷:۳۰',
    entry: 'ورودی پرداخت‌شده: ۸۰,۰۰۰ تومان',
    prize: 'جوایز دریافتی: ۱۲۰,۰۰۰ تومان + ۳۰ امتیاز رنک',
  })),
};

const rules = [
  {
    title: 'پذیرش قوانین',
    body: 'با ثبت‌نام، ورود یا استفاده از خدمات GG10، شما تأیید می‌کنید که این قوانین و مقررات را مطالعه کرده‌اید و با آن‌ها موافق هستید.',
  },
  {
    title: 'حساب کاربری',
    body: 'هر کاربر مجاز به ایجاد یک حساب کاربری است. مسئولیت حفظ امنیت اطلاعات حساب و فعالیت‌های انجام‌شده از طریق حساب بر عهده کاربر است.',
  },
  {
    title: 'استفاده مجاز از خدمات',
    body: 'کاربران متعهد می‌شوند از هرگونه سوءاستفاده، تقلب، دست‌کاری سیستم‌ها یا ایجاد اختلال در عملکرد سرویس خودداری کنند.',
  },
  {
    title: 'رنک، امتیاز و لیدربورد',
    body: 'امتیازها و رنک‌ها بر اساس الگوریتم‌های داخلی GG10 محاسبه می‌شوند و ممکن است در پایان هر فصل ریست یا به‌روزرسانی شوند.',
  },
  {
    title: 'تعلیق یا مسدودسازی حساب',
    body: 'GG10 این حق را دارد که در صورت مشاهده تخلف، حساب کاربری را به‌صورت موقت یا دائمی مسدود کند.',
  },
  {
    title: 'تغییر قوانین',
    body: 'قوانین و مقررات ممکن است در هر زمان به‌روزرسانی شوند. ادامه استفاده از خدمات به‌منزله پذیرش تغییرات است.',
  },
  {
    title: 'پرداخت و جوایز',
    body: 'تمام پرداخت‌ها، ورودی لابی‌ها و جوایز بر اساس اطلاعات ثبت‌شده در هر لابی محاسبه می‌شود و کاربر موظف است پیش از شرکت، جزئیات را بررسی کند.',
  },
  {
    title: 'رفتار کاربران',
    body: 'هرگونه توهین، تهدید، تبانی، مزاحمت برای کاربران دیگر یا انتشار محتوای نامناسب می‌تواند باعث محدودیت دسترسی یا مسدود شدن حساب شود.',
  },
  {
    title: 'مسئولیت اطلاعات',
    body: 'کاربر مسئول صحت اطلاعات واردشده در پروفایل، نام بازی، شماره تماس و سایر بخش‌های حساب است و GG10 مسئول پیامدهای اطلاعات اشتباه نخواهد بود.',
  },
  {
    title: 'پشتیبانی و رسیدگی',
    body: 'درخواست‌های پشتیبانی از طریق مسیرهای رسمی داخل اپلیکیشن بررسی می‌شود و تصمیم نهایی درباره اختلاف‌ها بر اساس داده‌های ثبت‌شده در سیستم خواهد بود.',
  },
];

const referral = {
  code: '245845789346',
  link: 'https://GG10.ir/245845789346',
  invited: '۲',
  income: '۵۰,۰۰۰ تومان',
};

const Page = ({ title, children, bottomNav = true }) => {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 64px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        px: 3,
        pt: 3,
        pb: bottomNav ? 12 : 4,
      }}
      gap={3}
    >
      <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={0.75}>
        <Typography variant="title2" color="custom.white" sx={{ lineHeight: 1.4 }}>
          {title}
        </Typography>
        <IconButton onClick={() => navigate(-1)} sx={{ width: 24, height: 24, p: 0 }}>
          <ChevronForward color="#fff" />
        </IconButton>
      </Stack>

      {children}
      {bottomNav && <BottomNav />}
    </Stack>
  );
};

const Card = ({ children, sx, ...props }) => (
  <Box sx={{ bgcolor: 'custom.bg2', borderRadius: '8px', ...sx }} {...props}>
    {children}
  </Box>
);

const LobbyMetaIcon = ({ src }) => (
  <Box
    component="img"
    src={src}
    alt=""
    sx={{
      width: 18,
      height: 18,
      flexShrink: 0,
    }}
  />
);

const PrimaryButton = ({ children, disabled, onClick }) => (
  <Button
    fullWidth
    disabled={disabled}
    onClick={onClick}
    sx={{
      height: 48,
      bgcolor: disabled ? 'custom.grey2' : 'primary.main',
      color: 'custom.white',
      borderRadius: '8px',
      '&:hover': { bgcolor: disabled ? 'custom.grey2' : 'primary.dark' },
      '&.Mui-disabled': {
        bgcolor: 'custom.grey2',
        color: 'custom.white',
        opacity: 1,
      },
    }}
  >
    {children}
  </Button>
);

const AccountInput = ({ defaultValue, placeholder, type = 'text', startIcon }) => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      height: 52,
      borderRadius: '8px',
      bgcolor: 'custom.grey7',
      border: '1px solid',
      borderColor: 'custom.grey4',
      px: 1.5,
    }}
  >
    {startIcon}
    <Box
      component="input"
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      dir={type === 'text' && defaultValue ? 'ltr' : 'rtl'}
      style={{
        width: '100%',
        border: 0,
        outline: 0,
        background: 'transparent',
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '16px',
        fontWeight: 700,
        textAlign: type === 'text' && defaultValue ? 'left' : 'right',
      }}
    />
  </Stack>
);

const Toast = ({ message }) =>
  message ? (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        bottom: 84,
        transform: 'translateX(-50%)',
        width: 'min(344px, calc(100vw - 32px))',
        bgcolor: 'custom.bg2',
        color: 'custom.white',
        borderRadius: '8px',
        px: 2,
        py: 1.5,
        zIndex: 1400,
        textAlign: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
      }}
    >
      <Typography variant="sub2">{message}</Typography>
    </Box>
  ) : null;

export const AccountEditProfilePage = () => {
  const initialName = 'amir_gamerr';
  const initialAvatar = 3;
  const [name, setName] = useState(initialName);
  const [selectedAvatar, setSelectedAvatar] = useState(initialAvatar);
  const hasChanged = name !== initialName || selectedAvatar !== initialAvatar;

  return (
    <Page title="ویرایش پروفایل">
      <Stack gap={1.5} alignItems="flex-end">
        <Typography variant="title3" color="custom.white">
          ویرایش اسم
        </Typography>
        <Stack direction="row-reverse" justifyContent="space-between" alignItems="center" width="100%">
          <Typography variant="body3" color="custom.white" textAlign="right">
            اسم شما باید دقیقاً منطقی با نام شما در گیم باشد
          </Typography>
          <Typography variant="sub2" color="custom.linkBlue">
            راهنما
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            width: '100%',
            height: 56,
            bgcolor: 'custom.bg3',
            color: '#00834F',
            borderBottom: '2px solid #119859',
            px: 1.5,
          }}
        >
          <CheckCircleIcon sx={{ color: '#119859' }} />
          <Box
            component="input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            dir="ltr"
            style={{
              flex: 1,
              minWidth: 0,
              border: 0,
              outline: 0,
              background: 'transparent',
              color: '#00834F',
              fontFamily: 'inherit',
              fontSize: '16px',
              fontWeight: 700,
              textAlign: 'right',
            }}
          />
        </Stack>
        <Stack alignItems="flex-end" gap={0.5} sx={{ width: '100%', pr: 1 }}>
          <Typography variant="caption1" color="custom.grey0">
            دقت کنید اگر نام واردشده با اسم شما در گیم یکسان نباشد:
          </Typography>
          <Typography variant="caption1" color="custom.grey0">
            • حق شرکت در لابی‌ها را نخواهید داشت
          </Typography>
          <Typography variant="caption1" color="custom.grey0">
            • کمترین زمان مجاز برای تغییر نام، یک هفته خواهد بود
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: 'custom.grey5', mx: -3 }} />

      <Stack gap={1.5} alignItems="flex-end">
        <Typography variant="title3" color="custom.white">
          ویرایش آواتار
        </Typography>
        <Typography variant="body3" color="custom.white">
          یکی از آواتارها را برای حساب خود انتخاب کنید
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} sx={{ width: '100%' }}>
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(44px, 1fr))',
              gap: 1,
            }}
          >
            {avatars.slice(0, 8).map((avatar, index) => (
              <Box
                key={`${avatar}-${index}`}
                component="button"
                type="button"
                onClick={() => setSelectedAvatar(index)}
                sx={{
                  p: 0,
                  border: index === selectedAvatar ? '2px solid #E40B5A' : '2px solid transparent',
                  borderRadius: '8px',
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  aspectRatio: '1 / 1',
                }}
              >
                <Box
                  component="img"
                  src={avatar}
                  alt=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: index > 1 ? 'saturate(0.8)' : 'none',
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box
            component="img"
            src={avatars[selectedAvatar]}
            alt=""
            sx={{
              width: 110,
              height: 110,
              borderRadius: '8px',
              objectFit: 'cover',
              border: '2px solid #E40B5A',
            }}
          />
        </Stack>
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 92 }} />
      <PrimaryButton disabled={!hasChanged}>تایید و ثبت</PrimaryButton>
    </Page>
  );
};

export const AccountLobbiesHistoryPage = () => {
  const [mode, setMode] = useState('battle-royal');
  const items = lobbyHistory[mode === 'battle-royal' ? 'battleRoyal' : 'multiplayer'];

  return (
    <Page title="تاریخچه لابی‌ها">
      <GameModeSelector value={mode} onChange={setMode} />

      <Stack gap={2}>
        {items.map((item) => (
          <Card key={item.id} sx={{ p: 1.5, minHeight: 117 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1.5}>
              <Stack alignItems="flex-end" sx={{ flex: 1, minWidth: 0 }}>
                <Stack direction="row" alignItems="center" gap={1} sx={{ width: '100%' }}>
                  <Typography variant="caption1" color="custom.white" sx={{ flexShrink: 0 }}>
                    {item.time}
                  </Typography>
                  <Typography variant="caption1" color="custom.white" sx={{ flexShrink: 0 }}>
                    {item.date}
                  </Typography>
                  <Typography variant="sub2" color="custom.white" noWrap sx={{ flex: 1 }}>
                    {item.title}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={0.5} mt={1} color="custom.dollar">
                  <Typography variant="caption1" color="custom.dollar">
                    {item.entry}
                  </Typography>
                  <LobbyMetaIcon src={EntryFeeIcon} />
                </Stack>
                <Stack direction="row" alignItems="center" gap={0.5} color="custom.prize">
                  <Typography variant="caption1" color="custom.prize">
                    {item.prize}
                  </Typography>
                  <LobbyMetaIcon src={PrizeIcon} />
                </Stack>
              </Stack>

              <Box
                component="img"
                src={item.image}
                alt=""
                sx={{ width: 44, height: 44, borderRadius: '8px', objectFit: 'cover' }}
              />
            </Stack>
          </Card>
        ))}
      </Stack>
    </Page>
  );
};

export const AccountSecuritySettingsPage = () => {
  const [isActivating, setIsActivating] = useState(false);
  const [toast, setToast] = useState('');

  const handleActivate = () => {
    setToast('رمز ورود با موفقیت فعال شد');
    setIsActivating(false);
    window.setTimeout(() => setToast(''), 2200);
  };

  return (
    <Page title="تنظیمات امنیتی">
      {!isActivating ? (
        <Box sx={{ flexGrow: 1, display: 'grid', placeItems: 'center', minHeight: 520, pt: 4 }}>
          <Card sx={{ width: '100%', p: 4, textAlign: 'center' }}>
            <KeyOutlinedIcon sx={{ color: 'custom.white', fontSize: 76, mb: 2, strokeWidth: 1.6 }} />
            <Typography variant="title2" color="custom.white">
              فعالسازی رمز ورود حساب کاربری
            </Typography>
            <Typography variant="body3" color="custom.white" mt={1}>
              جهت امنیت بیشتر حساب کاربری خود، برای ورود رمز تعیین کنید
            </Typography>
            <Button
              fullWidth
              onClick={() => setIsActivating(true)}
              sx={{
                mt: 3,
                height: 48,
                bgcolor: 'primary.main',
                color: 'custom.white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              فعالسازی
            </Button>
          </Card>
        </Box>
      ) : (
        <Stack gap={2}>
          <Card sx={{ p: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack alignItems="flex-end">
                <Typography variant="title3" color="custom.white">
                  رمز ورود
                </Typography>
                <Typography variant="caption1" color="custom.grey1">
                  رمز ورود باید حداقل ۸ کاراکتر داشته باشد.
                </Typography>
              </Stack>
              <LockOutlinedIcon sx={{ color: 'primary.light', fontSize: 28 }} />
            </Stack>
          </Card>

          <Card sx={{ p: 2 }}>
            <Stack gap={1.5}>
              <AccountInput
                placeholder="رمز عبور"
                type="password"
                startIcon={<VisibilityOffOutlinedIcon sx={{ color: 'custom.grey1', mr: 1 }} />}
              />
              <AccountInput placeholder="تکرار رمز عبور" type="password" />
              <PrimaryButton onClick={handleActivate}>فعال‌سازی رمز عبور</PrimaryButton>
            </Stack>
          </Card>
        </Stack>
      )}
      <Toast message={toast} />
    </Page>
  );
};

export const AccountReferralPage = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [toast, setToast] = useState('');

  const copyText = (text) => {
    navigator.clipboard?.writeText(text);
    setToast('کپی شد');
    window.setTimeout(() => setToast(''), 1800);
  };

  return (
    <Page title="دعوت از دوستان">
      <Box
        sx={{
          position: 'relative',
          height: 120,
          borderRadius: '4px',
          overflow: 'hidden',
          bgcolor: '#3A0049',
        }}
      >
        <Box
          component="img"
          src={referralFigma}
          alt=""
          sx={{
            position: 'absolute',
            width: '114%',
            maxWidth: 'none',
            left: '-7%',
            top: -247,
          }}
        />
      </Box>

      <Stack gap={3.5} alignItems="flex-end">
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <IconButton onClick={() => copyText(referral.code)} sx={{ color: 'custom.white' }}>
            <ContentCopyOutlinedIcon />
          </IconButton>
          <Stack alignItems="flex-end">
            <Typography variant="title3" color="custom.white">
              کد دعوت شما
            </Typography>
            <Typography variant="body2" color="custom.grey1">
              {referral.code}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
          <IconButton onClick={() => copyText(referral.link)} sx={{ color: 'custom.white' }}>
            <ContentCopyOutlinedIcon />
          </IconButton>
          <Stack alignItems="flex-end">
            <Typography variant="title3" color="custom.white">
              لینک دعوت شما
            </Typography>
            <Typography variant="body2" color="custom.grey1">
              {referral.link}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-around" width="100%">
          <Stack alignItems="center" gap={0.5}>
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Typography variant="caption1" color="custom.white">
                کل درآمد شما
              </Typography>
              <Box
                component="span"
                sx={{
                  width: 20,
                  height: 20,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'custom.white',
                }}
              >
                <LobbyMetaIcon src={EntryFeeIcon} />
              </Box>
            </Stack>
            <Typography variant="sub1" color="custom.grey0">
              {referral.income}
            </Typography>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ borderColor: 'custom.grey5' }} />
          <Stack alignItems="center" gap={0.5}>
            <Stack direction="row" alignItems="center" gap={0.5}>
              <Typography variant="caption1" color="custom.white">
                تعداد دوستان دعوت‌شده
              </Typography>
              <BarChartOutlinedIcon sx={{ color: 'custom.white', fontSize: 20 }} />
            </Stack>
            <Typography variant="sub1" color="custom.grey0">
              {referral.invited}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 132 }} />

      <Button
        fullWidth
        onClick={() => setShowHelp(true)}
        sx={{
          height: 40,
          color: 'custom.white',
          border: '1px solid #fff',
          borderRadius: '8px',
        }}
      >
        راهنمای دعوت از دوستان
      </Button>

      {showHelp && (
        <Box
          onClick={() => setShowHelp(false)}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            zIndex: 1300,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              width: 'min(440px, 100vw)',
              p: 2,
              borderRadius: '8px 8px 0 0',
            }}
          >
            <Typography variant="title3" color="custom.white" mb={1}>
              روش‌های دعوت
            </Typography>
            <Typography variant="caption1" color="custom.grey0">
              دوست شما می‌تواند کد دعوت‌تان را هنگام ثبت‌نام یا در بخش کد هدیه وارد کند. با ارسال لینک دعوت، کد به‌صورت خودکار برای او اعمال می‌شود. دعوت زمانی معتبر است که کاربر دعوت‌شده حداقل در یک لابی شرکت کند.
            </Typography>
          </Card>
        </Box>
      )}

      <Toast message={toast} />
    </Page>
  );
};

export const AccountRulesPage = () => (
  <Page title="قوانین و مقررات استفاده از GG10" bottomNav={false}>
    <Stack gap={2.25} alignItems="flex-end">
      {rules.map((rule, index) => (
        <Stack key={rule.title} gap={1} alignItems="flex-end">
          <Typography variant="sub1" color="custom.white" textAlign="right">
            {index + 1}. {rule.title}
          </Typography>
          <Typography variant="caption1" color="custom.grey0" textAlign="right" lineHeight={2}>
            {rule.body}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Page>
);

export const AccountSupportPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Page title="پشتیبانی">
      <Card sx={{ p: 2 }}>
      <Stack alignItems="center" gap={1.5}>
        <SportsEsportsOutlinedIcon sx={{ color: 'primary.light', fontSize: 48 }} />
        <Typography variant="title3" color="custom.white">
          چطور می‌توانیم کمک کنیم؟
        </Typography>
        <Typography variant="caption1" color="custom.grey0" textAlign="center">
          سوالات و ابهامات حساب کاربری، لابی‌ها، پرداخت و جوایز را از این بخش پیگیری کنید.
        </Typography>
      </Stack>
      </Card>

      <Stack gap={1.5}>
        {[
          ['راهنمای حساب کاربری', 'ویرایش نام، آواتار و اطلاعات حساب', HomeOutlinedIcon],
          ['مشکل ورود یا رمز عبور', 'بازیابی دسترسی و رمز ورود', KeyOutlinedIcon],
          ['امنیت حساب', 'گزارش ورود مشکوک یا مشکل امنیتی', ShieldOutlinedIcon],
          ['ارسال تیکت پشتیبانی', 'ثبت درخواست برای تیم پشتیبانی', LinkOutlinedIcon],
        ].map(([title, subtitle, Icon]) => (
          <Button
            dir="ltr"
            fullWidth
            key={title}
            onClick={() => navigate('/user/profile/support')}
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
        ))}
      </Stack>
    </Page>
  );
};
