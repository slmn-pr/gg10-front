import { useMemo } from 'react';

interface UseFormatDateOptions extends Intl.DateTimeFormatOptions {}

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

export default function useFormatDate(
  dateString?: string | null,
  options: UseFormatDateOptions = DEFAULT_OPTIONS,
) {
  // example: 2026-06-17T20:00:00 -> 1404/03/12 14:45

  return useMemo(() => {
    if (!dateString) return '-';

    const date = new Date(dateString);

    return new Intl.DateTimeFormat('fa-IR-u-ca-persian', options)
      .format(date)
      .replace(',', ' ');
  }, [dateString, options]);
}
