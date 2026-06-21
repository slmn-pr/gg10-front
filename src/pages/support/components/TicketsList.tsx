import { List, ListItem, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NoTicketView from './NoTicketView';
import useFormatDate from '@/hooks/useFormatDate';
import type { TicketResponse } from '@/api/support/support';

interface TicketListProps {
  tickets: TicketResponse[];
}

function TicketListItem({ ticket }: { ticket: TicketResponse }) {
  const navigate = useNavigate();
  const formattedDate = useFormatDate(ticket.created_at);

  return (
    <ListItem
      sx={{ borderBottom: '2px solid #000', pb: 1, cursor: 'pointer' }}
      onClick={() => navigate(`/ticket/${ticket.id}`)}
    >
      <Stack>
        <Typography variant="sub1" color="#fff">
          {ticket.title}
        </Typography>

        <Typography variant="sub3" color="custom.grey3">
          {ticket.description}
        </Typography>

        <Typography variant="sub3" color="custom.grey3">
          {formattedDate}
        </Typography>
      </Stack>
    </ListItem>
  );
}

export default function TicketList({ tickets }: TicketListProps) {
  if (!tickets.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NoTicketView />
      </div>
    );
  }

  return (
    <List sx={{ direction: 'rtl' }}>
      {tickets.map((ticket) => (
        <TicketListItem key={ticket.id} ticket={ticket} />
      ))}
    </List>
  );
}
