import { useMemo } from 'react';

export default function useFormatDate(dateString?: string | null) {
  // example: 2026-06-17T20:00:00 -> 1404/03/12 14:45

  if (!dateString) return '-';

  const date = new Date(dateString);

  return useMemo(
    () =>
      new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
        .format(date)
        .replace(',', ' '),
    [dateString],
  );
}
