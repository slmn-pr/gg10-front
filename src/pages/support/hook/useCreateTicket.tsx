import { useMutation } from '@tanstack/react-query';
import { createTicketReq } from '@/api';
import type { CreateTicketPayload } from '@/api/support/support';

export default function useCreateTicket() {
  return useMutation({
    mutationKey: ['create_ticket'],
    mutationFn: (payload: CreateTicketPayload) => createTicketReq(payload),
  });
}
