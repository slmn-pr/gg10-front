import apiClient from './config';

export interface CreateTicketPayload {
  title: string;
  description: string;
  priority: string;
  lobby_id: string;
}

export const createTicketReq = async (payload: CreateTicketPayload) => {
  return apiClient.post('tickets', payload);
};
