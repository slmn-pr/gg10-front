import { Box, Stack, Typography } from '@mui/material';
import useFormatDate from '@/hooks/useFormatDate';
import TicketAttachmentChip from './TicketAttachmentChip';
import type { TicketMessageResponse } from '@/api/support/support';

interface TicketMessageBubbleProps {
  message: TicketMessageResponse;
  /** true if this message belongs to the current logged-in user (always the ticket owner, not admin) */
  isMine: boolean;
}

const TIME_ONLY_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export default function TicketMessageBubble({
  message,
  isMine,
}: TicketMessageBubbleProps) {  
  const time = useFormatDate(message.created_at, TIME_ONLY_OPTIONS);
  const fileName = message.attachment_url?.split('/').pop();

  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: isMine ? 'flex-end' : 'flex-start',
      }}
      spacing={0.5}
      mb={2}
    >
      <Box
        sx={{
          maxWidth: '85%',
          bgcolor: isMine ? '#3DDC97' : '#8FC6E8',
          borderRadius: '12px',
          px: 2,
          py: 1.5,
        }}
      >
        {message.message && (
          <Typography
            variant="sub1"
            color="#0A0A0A"
            sx={{ direction: 'rtl', whiteSpace: 'pre-wrap' }}
          >
            {message.message}
          </Typography>
        )}
      </Box>

      {message.attachment_url && fileName && <TicketAttachmentChip fileName={fileName} />}

      <Typography variant="caption2" color="custom.grey3">
        {time}
      </Typography>
    </Stack>
  );
}
