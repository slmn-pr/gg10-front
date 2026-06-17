import { CreateTicketPayload, createTicketReq } from '@/api/ticket';
import { useMutation } from '@tanstack/react-query';

export default function useCreateTicket() {
  async function createTicket(payload: CreateTicketPayload) {
    const { data } = await createTicketReq({
      description: payload?.description,
      lobby_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      priority: 'medium',
      title: payload?.title,
    });

    return data;
  }

  return useMutation({
    mutationKey: ['create_ticket'],

    mutationFn: createTicket,
  });
}
