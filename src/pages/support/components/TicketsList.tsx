import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Ticket } from '../sections/TicketSection';
import NoTicketIcon from './NoTicketIcon';
import NoTicketView from './NoTicketView';

interface TicketListProps {
  tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
  if (!tickets.length)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <NoTicketView />
      </div>
    );

  return (
    <List sx={{ direction: 'rtl' }}>
      {tickets.map((ticket) => (
        <ListItem sx={{ borderBottom: '2px solid #000', pb: 1 }}>
          <Stack>
            <Typography variant="sub1" color="#fff">
              {ticket.title}
            </Typography>

            <Typography variant="sub2" color="#fff">
              {ticket.subTitle}
            </Typography>

            <Typography variant="sub3" color="custom.grey3">
              {ticket.content}
            </Typography>

            <Typography variant="sub3" color="custom.grey3">
              {ticket.date}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}
