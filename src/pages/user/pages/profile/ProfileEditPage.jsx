import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { avatars } from './shared/data.js';
import { Page, PrimaryButton } from './shared/ui.jsx';

export const ProfileEditPage = () => {
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
