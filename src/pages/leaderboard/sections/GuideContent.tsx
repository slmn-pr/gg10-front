import BronzeBigIcon from '@/components/icons/rank/BronzeBigIcon';
import GoldBigIcon from '@/components/icons/rank/GoldBigIcon';
import LegendRankIcon from '@/components/icons/rank/LegendRankIcon';
import SilverIcon from '@/components/icons/rank/SilverIcon';
import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

export default function GuideContent() {
  return (
    <Stack
      sx={{
        maxHeight: '400px',
        overflow: 'auto',
        scrollbarWidth: '0px',
        scrollBehavior: 'smooth',
      }}
    >
      {/* رنک چیست */}
      <Stack>
        <Typography variant="title2">رنک چیست</Typography>
        <Typography variant="body2">
          رنک نشان‌دهنده‌ی عملکرد شما در رقابت‌هاست. <br />
          هرچه امتیاز بیشتری جمع کنید، رنک بالاتری می‌گیرید و جایگاه بهتری در لیدربورد
          خواهید داشت.
        </Typography>
      </Stack>

      {/* امتیاز چطور محاسبه میشود */}
      <Stack>
        <Typography variant="title2">امتیاز چطور محاسبه میشود</Typography>
        <Typography variant="body2">
          بعد از هر مسابقه، بر اساس عملکردتان امتیاز می‌گیرید:
        </Typography>

        <List>
          <ListItem>
            <ListItemText>نتیجه مسابقه (برد / باخت)</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>عملکرد فردی (مثل امتیاز، کیل، مأموریت‌ها)</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>فعالیت مستمر در طول فصل</ListItemText>
          </ListItem>
        </List>

        <Typography variant="body2">
          هرچه عملکرد بهتری داشته باشید، امتیاز بیشتری دریافت می‌کنید.
        </Typography>
      </Stack>

      {/* سطوح رنک  */}
      <Stack>
        <Typography variant="title2">سطوح رنک</Typography>

        <Typography variant="body2">
          رنک‌ها به چند سطح تقسیم می‌شوند. با افزایش امتیاز، به سطح بعدی می‌روید:
        </Typography>

        <Stack gap={1}>
          {/* Amatur */}
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
            gap={0.5}
          >
            <BronzeBigIcon />
            آماتور: 0 تا 5,000 امتیاز
          </Typography>

          {/* Pro */}
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
            gap={0.5}
          >
            <SilverIcon />
            پرو: 5,000 تا 6,500 امتیاز
          </Typography>

          {/* Master */}
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
            gap={0.5}
          >
            <GoldBigIcon />
            مستر: 6,500 تا 7,500 امتیاز
          </Typography>

          {/* Legend */}
          <Typography
            variant="body2"
            sx={{ display: 'flex', alignItems: 'center' }}
            gap={0.5}
          >
            <LegendRankIcon />
            لجند: 7,500 به بالا
          </Typography>
        </Stack>
      </Stack>

      {/* رنک‌ها تا چه زمانی معتبرند؟       */}
      <Stack>
        <Typography variant="title2">رنک‌ها تا چه زمانی معتبرند؟</Typography>
        <List>
          <ListItem>
            <ListItemText>هر فصل لیدربورد ریست می‌شود</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>رنک نهایی شما در پایان فصل ثبت می‌شود</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>جوایز بر اساس رنک نهایی فصل محاسبه می‌شوند</ListItemText>
          </ListItem>
        </List>
      </Stack>

      {/* چرا رنک مهم است؟ */}
      <Stack>
        <Typography variant="title2">چرا رنک مهم است؟</Typography>
        <List>
          <ListItem>
            <ListItemText>تعیین جایگاه شما در لیدربورد</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>دریافت جوایز فصلی</ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>نمایش مهارت شما به سایر بازیکنان</ListItemText>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
}
