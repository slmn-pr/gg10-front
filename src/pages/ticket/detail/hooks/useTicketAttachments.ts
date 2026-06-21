import { useMemo } from 'react';
import type { TicketDetailResponse } from '@/api/support/support';

export interface TicketAttachment {
  url: string;
  fileName: string;
  type: 'image' | 'video';
}

const VIDEO_EXTENSIONS = ['.mp4'];

function getAttachmentType(url: string): 'image' | 'video' {
  const lower = url.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext)) ? 'video' : 'image';
}

export default function useTicketAttachments(ticket?: TicketDetailResponse) {
  return useMemo<TicketAttachment[]>(() => {
    if (!ticket) return [];

    const items: TicketAttachment[] = [];

    if (ticket.attachment_url) {
      items.push({
        url: ticket.attachment_url,
        fileName: ticket.attachment_url.split('/').pop() ?? 'file',
        type: getAttachmentType(ticket.attachment_url),
      });
    }

    ticket.messages.forEach((message) => {
      if (message.attachment_url) {
        items.push({
          url: message.attachment_url,
          fileName: message.attachment_url.split('/').pop() ?? 'file',
          type: getAttachmentType(message.attachment_url),
        });
      }
    });

    return items;
  }, [ticket]);
}
