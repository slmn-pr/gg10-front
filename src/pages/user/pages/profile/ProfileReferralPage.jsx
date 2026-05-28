import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import referralFigma from '@/assets/images/account-referral-figma.png';
import EntryFeeIcon from '@/assets/icons/Lobbies cards icons/entry_fee.svg';
import { referral } from './shared/data.js';
import { Card, LobbyMetaIcon, Page, Toast } from './shared/ui.jsx';

export const ProfileReferralPage = () => {
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
