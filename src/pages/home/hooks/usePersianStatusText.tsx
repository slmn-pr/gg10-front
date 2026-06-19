import { LobbyStatus } from '@/api/lobbies/lobbies';
import { useMemo } from 'react';

export const lobbyStatusLabelMap: Record<LobbyStatus, string> = {
  registering: 'در حال ثبت‌نام',
  full: 'تکمیل ظرفیت',
  running: 'در حال برگزاری',
  finished: 'پایان یافته',
  canceled: 'لغو شده',
};

export default function usePersianStatusText(status: LobbyStatus) {
  return useMemo(() => lobbyStatusLabelMap[status], [status]);
}
