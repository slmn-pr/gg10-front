import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs } from '@mui/material';
import TicketList from '../components/TicketsList';
import { listMyTicketsReq } from '@/api';
import type { TicketStatus } from '@/api/support/support';

type SelectedTab = 'current' | 'answered';

const CURRENT_STATUSES: TicketStatus[] = ['open', 'in_progress'];

export default function TicketSection() {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('current');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tickets', 'me'],
    queryFn: () => listMyTicketsReq(),
  });

  const tickets = data ?? [];

  const filteredTickets = useMemo(() => {
    if (selectedTab === 'current') {
      return tickets.filter((t) => CURRENT_STATUSES.includes(t.status));
    }
    return tickets.filter((t) => t.status === 'closed');
  }, [tickets, selectedTab]);

  function onTabChange(_event: any, value: SelectedTab) {
    setSelectedTab(value);
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

      <Tabs value={selectedTab} onChange={onTabChange}>
        <Tab value="current" label="جاری" />
        <Tab value="answered" label="پاسخ داده شده" />
      </Tabs>

      {isLoading && (
        <Typography variant="sub2" color="custom.grey2" textAlign="center" mt={4}>
          در حال بارگذاری...
        </Typography>
      )}

      {isError && (
        <Typography variant="sub2" color="error" textAlign="center" mt={4}>
          خطا در دریافت تیکت‌ها
        </Typography>
      )}

      {!isLoading && !isError && <TicketList tickets={filteredTickets} />}
    </section>
  );
}
