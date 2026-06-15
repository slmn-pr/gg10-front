import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';

export default function GuideSheet() {
  const [showGuide, setShowGuide] = useState(false);

  function onClose() {
    setShowGuide(false);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        onClick={() => setShowGuide(true)}
        sx={{
          color: 'custom.linkBlue',
          minWidth: 0,
          py: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 0.5,
        }}
      >
        <InfoOutlinedIcon sx={{ fontSize: 18 }} />
        <Typography variant="sub2" color="custom.linkBlue">
          راهنمای رنک‌های لیدربورد: رنک‌ها چطور محاسبه شده‌اند؟
        </Typography>
      </Button>

      {showGuide && (
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <IconButton onClick={onClose} sx={{ color: 'custom.white' }}>
                <CloseIcon />
              </IconButton>
              <Typography variant="title3" color="custom.white">
                راهنمای رتبه‌ها
              </Typography>
            </Stack>

            <Stack gap={2} alignItems="flex-end">
              {[
                [
                  'رتبه بازیکن چیست؟',
                  'رتبه براساس امتیاز عملکرد شما در لابی‌های رتبه‌بندی محاسبه می‌شود.',
                ],
                [
                  'امتیاز چطور محاسبه می‌شود؟',
                  'برد، جایگاه نهایی، تعداد حضور موفق و قوانین هر مود روی امتیاز اثر می‌گذارد.',
                ],
                [
                  'سطوح رنک',
                  'بازیکن‌ها در سطح‌های برنز، سیلور، گلد و لجند دسته‌بندی می‌شوند.',
                ],
                [
                  'پایان فصل',
                  'در پایان هر فصل، رتبه‌ها ثبت و فصل بعد با شرایط جدید شروع می‌شود.',
                ],
              ].map(([title, body]) => (
                <Stack key={title} gap={0.6} alignItems="flex-end">
                  <Typography variant="sub1" color="custom.white">
                    {title}
                  </Typography>
                  <Typography
                    variant="caption1"
                    color="custom.grey0"
                    textAlign="right"
                    lineHeight={1.9}
                  >
                    {body}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
}
