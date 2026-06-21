import { Box, Stack, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getTicketDetailReq, sendTicketMessageReq } from '@/api';
import TicketMessageBubble from './TicketMessageBubble';
import TicketComposer from './TicketComposer';
import useFormatDate from '@/hooks/useFormatDate';

export default function TicketDetailPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    data: ticket,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['ticket', id],
    queryFn: () => getTicketDetailReq(id as string),
    enabled: !!id,
  });

  const { mutate: sendMessage, isPending: isSending } = useMutation({
    mutationFn: (payload: { message: string; attachment_url?: string }) =>
      sendTicketMessageReq(id as string, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ticket', id] });
    },
    onError: () => {
      toast.error('ارسال پیام با خطا مواجه شد');
    },
  });

  const createdDate = useFormatDate(ticket?.created_at);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !ticket) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Typography color="error">خطا در دریافت اطلاعات تیکت</Typography>
      </Box>
    );
  }

  const isClosed = ticket.status === 'closed';

  return (
    <Stack sx={{ width: '100%', height: '100%' }}>
      <Stack sx={{ flex: 1, px: 2, py: 2, overflowY: 'auto' }}>
        <Typography variant="sub3" color="custom.grey3" textAlign="center" mb={2}>
          {createdDate}
        </Typography>

        <TicketMessageBubble
          message={{
            id: ticket.id,
            ticket_id: ticket.id,
            user_id: ticket.user_id,
            message: ticket.description,
            attachment_url: ticket.attachment_url,
            is_from_admin: false,
            created_at: ticket.created_at,
          }}
          isMine
        />

        {ticket.messages.map((message) => (
          <TicketMessageBubble
            key={message.id}
            message={message}
            isMine={!message.is_from_admin}
          />
        ))}
      </Stack>

      <TicketComposer onSend={sendMessage} isSending={isSending} disabled={isClosed} />
    </Stack>
  );
}
