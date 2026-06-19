import { useMemo } from 'react';

export default function useFormatCurrency(value: string) {
  const numericValue = Number(value.replace(/,/g, ''));

  if (!Number.isFinite(numericValue)) {
    return value;
  }

  return useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
      }).format(numericValue),
    [value],
  );
}
