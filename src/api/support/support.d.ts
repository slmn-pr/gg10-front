export type TicketStatus = 'open' | 'in_progress' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high';

export interface TicketResponse {
  id: string;
  title: string;
  description: string;
  attachment_url?: string | null;
  status: TicketStatus;
  priority: TicketPriority;
  user_id: string;
  admin_id?: string | null;
  lobby_id?: string | null;
  created_at: string;
  updated_at: string;
  closed_at?: string | null;
}

export interface TicketMessageResponse {
  id: string;
  ticket_id: string;
  user_id: string;
  message: string;
  attachment_url?: string | null;
  is_from_admin: boolean;
  created_at: string;
}

export interface TicketDetailResponse extends TicketResponse {
  messages: TicketMessageResponse[];
}

export interface GetTicketsParams {
  status?: TicketStatus;
  priority?: TicketPriority;
}

export interface CreateTicketPayload {
  title: string;
  description: string;
  priority?: TicketPriority;
  lobby_id?: string;
  attachment_url?: string;
}

export interface CreateTicketMessagePayload {
  message: string;
  attachment_url?: string;
}

export interface TicketAttachmentResponse {
  attachment_url: string;
}

export interface FAQResponse {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
