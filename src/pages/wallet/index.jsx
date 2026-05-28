import {
  AccountBalanceWalletOutlined,
  Add,
  ArrowDownward,
  ArrowUpward,
  CardGiftcardOutlined,
  CreditCardOutlined,
  ReceiptLongOutlined,
} from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/layout/bottom-navigation.jsx';
import WalletIcon from '@/components/icons/WalletIcon.jsx';

const walletActions = [
  {
    title: 'افزایش موجودی',
    subtitle: 'شارژ کیف پول برای شرکت در لابی‌ها',
    icon: <Add sx={{ fontSize: 22 }} />,
    path: '/wallet/deposit',
  },
  {
    title: 'برداشت وجه',
    subtitle: 'انتقال موجودی به حساب بانکی',
    icon: <ArrowUpward sx={{ fontSize: 22 }} />,
    path: '/wallet/withdraw',
  },
  {
    title: 'ثبت کد هدیه',
    subtitle: 'کد هدیه یا جایزه خود را وارد کنید',
    icon: <CardGiftcardOutlined sx={{ fontSize: 22 }} />,
    path: '/wallet/gift-code',
  },
];

const transactions = [
  ['افزایش موجودی', 'امروز، ۱۴:۳۰', '+ ۱,۰۰۰,۰۰۰ تومان', 'success', ArrowDownward],
  ['برداشت وجه', 'دیروز، ۱۸:۱۰', '- ۵۰۰,۰۰۰ تومان', 'error', ArrowUpward],
  ['جایزه لابی رتبه‌بندی', '۲۳ آبان، ۲۱:۴۵', '+ ۲,۵۰۰,۰۰۰ تومان', 'success', ReceiptLongOutlined],
  ['ثبت کد هدیه', '۲۰ آبان، ۱۰:۰۰', '+ ۱۵۰,۰۰۰ تومان', 'success', CardGiftcardOutlined],
];

const ActionRow = ({ title, subtitle, icon, path }) => {
  const navigate = useNavigate();

  return (
    <Button
      fullWidth
      onClick={() => navigate(path)}
      sx={{
        height: 74,
        justifyContent: 'space-between',
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        px: 1.5,
        color: 'custom.white',
        boxShadow: 'none',
        '&:hover': { bgcolor: 'custom.grey5' },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '8px',
          display: 'grid',
          placeItems: 'center',
          color: 'primary.main',
          bgcolor: 'rgba(228, 11, 90, 0.12)',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Stack alignItems="flex-end" gap={0.25} sx={{ minWidth: 0 }}>
        <Typography variant="sub1" color="custom.whiteOnBg2" noWrap>
          {title}
        </Typography>
        <Typography variant="caption2" color="custom.grey1" noWrap>
          {subtitle}
        </Typography>
      </Stack>
    </Button>
  );
};

const TransactionRow = ({ item }) => {
  const [title, date, amount, status, Icon] = item;
  const isSuccess = status === 'success';

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        height: 74,
        bgcolor: 'custom.bg2',
        borderRadius: '8px',
        px: 1.5,
      }}
    >
      <Stack alignItems="flex-start" gap={0.25}>
        <Typography
          variant="sub2"
          color={isSuccess ? 'custom.success' : 'custom.errorOnPrimaryBg'}
          sx={{ direction: 'ltr', textAlign: 'left' }}
        >
          {amount}
        </Typography>
        <Typography variant="caption2" color="custom.grey1">
          {date}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1} sx={{ minWidth: 0 }}>
        <Stack alignItems="flex-end" gap={0.25} sx={{ minWidth: 0 }}>
          <Typography variant="sub2" color="custom.whiteOnBg2" noWrap>
            {title}
          </Typography>
          <Typography variant="caption2" color="custom.grey1">
            تراکنش موفق
          </Typography>
        </Stack>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '8px',
            display: 'grid',
            placeItems: 'center',
            color: isSuccess ? 'custom.success' : 'custom.errorOnPrimaryBg',
            bgcolor: isSuccess ? 'rgba(17, 152, 89, 0.14)' : 'rgba(254, 58, 58, 0.14)',
            flexShrink: 0,
          }}
        >
          <Icon sx={{ fontSize: 22 }} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default function WalletPage() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: 'calc(100vh - 56px)',
        bgcolor: 'custom.bg1',
        width: '100%',
        overflowX: 'hidden',
        pb: 10,
      }}
      alignItems="center"
      gap={2}
    >
      <Stack
        sx={{
          width: '100%',
          px: 0.5,
          pb: 2.5,
          bgcolor: 'custom.bg1',
        }}
        alignItems="center"
        gap={2}
      >
        <Stack
          sx={{
            width: 'calc(100% - 32px)',
            height: 168,
            mt: 2,
            p: 2,
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            bgcolor: 'custom.bg2',
            background:
              'linear-gradient(135deg, #212121 0%, #1A1A1A 48%, #48011B 100%)',
          }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              position: 'absolute',
              insetInlineStart: -48,
              bottom: -76,
              width: 170,
              height: 170,
              borderRadius: '50%',
              border: '32px solid rgba(228, 11, 90, 0.18)',
            }}
          />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '8px',
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <WalletIcon color="#E40B5A" />
            </Box>
            <Typography variant="sub1" color="custom.grey0">
              موجودی کیف پول
            </Typography>
          </Stack>
          <Stack alignItems="flex-end" gap={0.5}>
            <Typography variant="title1" color="custom.white">
              ۳,۲۵۰,۰۰۰ تومان
            </Typography>
            <Typography variant="caption1" color="custom.grey1">
              قابل برداشت: ۲,۷۵۰,۰۰۰ تومان
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" sx={{ width: 'calc(100% - 32px)', height: 50 }} gap={2}>
          <Button
            onClick={() => navigate('/wallet/deposit')}
            sx={{
              flex: 1,
              bgcolor: 'custom.bg2',
              borderRadius: '8px',
              color: 'custom.grey0',
              gap: 0.75,
              '&:hover': { bgcolor: 'custom.grey5' },
            }}
          >
            <Typography variant="caption2" color="custom.grey0">
              اعتبار GG10
            </Typography>
            <AccountBalanceWalletOutlined sx={{ fontSize: 18, color: 'primary.main' }} />
          </Button>
          <Button
            onClick={() => navigate('/wallet/card/register')}
            sx={{
              flex: 1,
              bgcolor: 'custom.bg2',
              borderRadius: '8px',
              color: 'custom.grey0',
              gap: 0.75,
              '&:hover': { bgcolor: 'custom.grey5' },
            }}
          >
            <Typography variant="caption2" color="custom.grey0">
              حساب بانکی
            </Typography>
            <CreditCardOutlined sx={{ fontSize: 18, color: 'primary.main' }} />
          </Button>
        </Stack>

        <Stack sx={{ width: 'calc(100% - 32px)' }} gap="11px">
          {walletActions.map((action) => (
            <ActionRow key={action.title} {...action} />
          ))}
        </Stack>

        <Stack sx={{ width: 'calc(100% - 32px)', mt: 1 }} gap={1.25}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: 32 }}>
            <Typography variant="caption1" color="custom.linkBlue">
              مشاهده همه
            </Typography>
            <Typography variant="sub1" color="custom.white">
              تراکنش‌ها
            </Typography>
          </Stack>
          <Stack gap={1}>
            {transactions.map((item) => (
              <TransactionRow key={`${item[0]}-${item[1]}`} item={item} />
            ))}
          </Stack>
        </Stack>
      </Stack>

      <BottomNav />
    </Stack>
  );
}
