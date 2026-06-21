import apiClient from '../config';
import type {
  CreateTicketMessagePayload,
  CreateTicketPayload,
  FAQResponse,
  GetTicketsParams,
  TicketAttachmentResponse,
  TicketDetailResponse,
  TicketMessageResponse,
  TicketResponse,
} from './support';

export const listMyTicketsReq = async (
  params: GetTicketsParams = {},
): Promise<TicketResponse[]> => {
  const response = await apiClient.get<TicketResponse[]>('tickets', { params });
  return response.data;
};

export const getTicketDetailReq = async (
  ticketId: string,
): Promise<TicketDetailResponse> => {
  const response = await apiClient.get<TicketDetailResponse>(`tickets/${ticketId}`);
  return response.data;
};

export const createTicketReq = async (
  payload: CreateTicketPayload,
): Promise<TicketResponse> => {
  const response = await apiClient.post<TicketResponse>('tickets', payload);
  return response.data;
};

export const sendTicketMessageReq = async (
  ticketId: string,
  payload: CreateTicketMessagePayload,
): Promise<TicketMessageResponse> => {
  const response = await apiClient.post<TicketMessageResponse>(
    `tickets/${ticketId}/messages`,
    payload,
  );
  return response.data;
};

export const closeTicketReq = async (ticketId: string): Promise<TicketResponse> => {
  const response = await apiClient.patch<TicketResponse>(`tickets/${ticketId}/close`);
  return response.data;
};

export const uploadTicketAttachmentReq = async (
  file: File,
): Promise<TicketAttachmentResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await apiClient.post<TicketAttachmentResponse>(
    'tickets/attachments',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return response.data;
};

export const listFaqReq = async (): Promise<FAQResponse[]> => {
  const response = await apiClient.get<FAQResponse[]>('faq');
  return response.data;
};
