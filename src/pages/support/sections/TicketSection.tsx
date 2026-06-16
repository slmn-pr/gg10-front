import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import NoTicketIcon from '../components/NoTicketIcon';
import { useState } from 'react';
import { _mockTickets } from '../_mock';
import TicketList from '../components/TicketsList';
import NoTicketView from '../components/NoTicketView';

export interface Ticket {
  title: string;
  subTitle: string;
  content: string;
  date: string;
}

type SelectedTab = 'current' | 'answered';

export default function TicketSection() {
  const [tickets, setTicket] = useState<Ticket[]>(_mockTickets);

  const [selectedTab, setSelectedTab] = useState<SelectedTab>('current');

  function onTabChange(event: any, value: SelectedTab) {
    return setSelectedTab(value);
  }

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

      {/* Tabs */}

      <Tabs value={selectedTab} onChange={onTabChange}>
        <Tab value="current" label="جاری" />
        <Tab value="answered" label="پاسخ داده شده" />
      </Tabs>

      <TicketList tickets={[]} />

      {tickets.length <= 0 && (
        <Box sx={{ borderTop: '1px solid black' }}>
          <NoTicketView />
        </Box>
      )}
    </section>
  );
}
