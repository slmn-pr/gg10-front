import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import NoTicketIcon from '../components/NoTicketIcon';

export default function TicketSection() {
  return (
    <section dir="rtl">
      <Typography variant="sub2" color="white" mb={2}>
        لطفا قبل از ثبت تیکت به این نکات توجه کنید:
      </Typography>

      <List>
        <ListItem>
          <ListItemText>
            احتمالاً پرسش شما در بخش سوالات متداول موجود است؛ برای دریافت سریع‌تر پاسخ، به
            این بخش بازگردید.
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>امکان ثبت همزمان دو تیکت وجود ندارد.</ListItemText>
        </ListItem>
      </List>

      <Box sx={{ borderTop: '1px solid black' }}>
        <Box
          mt={10}
          sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}
        >
          <NoTicketIcon />
          <Button
            sx={{ mt: 2, width: '165px', mx: 'auto' }}
            variant="outlined"
            color="white"
          >
            ثبت تیکت
          </Button>
        </Box>
      </Box>
    </section>
  );
}
