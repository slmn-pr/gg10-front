import ChevronForwardIcon from '@/components/icons/ChevronForward';
import { PageContainer } from '@/components/layout';
import { Box, Button, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import EmptyBox from './components/EmptyBox';

export default function NotificationsPage() {
  const theme = useTheme();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'دریافت جایزه... تبریک!',
      description:
        'مبلغ 1,000,000 تومان بابت قهرمانی در لابی “قهرمانان”موجودی کیف پولت شارژ شد.',
      date: '30 آبان',
    },
    {
      id: 2,
      title: 'دریافت جایزه... تبریک!',
      description:
        'مبلغ 1,000,000 تومان بابت قهرمانی در لابی “قهرمانان”موجودی کیف پولت شارژ شد.',
      date: '30 آبان',
    },
    {
      id: 1,
      title: 'دریافت جایزه... تبریک!',
      description:
        'مبلغ 1,000,000 تومان بابت قهرمانی در لابی “قهرمانان”موجودی کیف پولت شارژ شد.',
      date: '30 آبان',
    },
  ]);

  // const notifications = [];
  return (
    <PageContainer px={{ xs: '10px' }} py={{ xs: 0 }} spacing={2}>
      {/* Head */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button
          variant="text"
          color="primary"
          size="small"
          startIcon={<ChevronForwardIcon color={theme.palette.custom.whiteOnBg1} />}
          sx={{ transform: 'translateX(6px)', py: '6px' }}
        >
          <Typography variant="button1" color={theme.palette.custom.whiteOnBg1}>
            اعلان‌ها
          </Typography>
        </Button>

        {/* <IconButton size="small"></IconButton> */}
      </Box>

      {/* Body */}
      <Box>
        {/* <EmptyBox /> */}

        {notifications.length > 0 ? (
          <Stack spacing={3}>
            {notifications.map((notification) => (
              <Box key={notification.id} sx={{ direction: 'rtl' }}>
                {/* Title */}
                <Box>
                  <Typography variant="title3" color="#FF317C">
                    {notification.title}
                  </Typography>
                </Box>

                {/* Summary */}
                <Box>
                  <Typography variant="sub2" color="custom.whiteOnBg1">
                    {notification.description}
                  </Typography>
                </Box>

                {/* Date */}
                <Box>
                  <Typography variant="caption2" color="custom.greyOnBg1">
                    {notification.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        ) : (
          <EmptyBox />
        )}
      </Box>
      {/* <MDAppBar title="Notifications" /> */}
    </PageContainer>
  );
}
