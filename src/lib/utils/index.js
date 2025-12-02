export const formatNumberCompact = (value) =>
  Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(
    value,
  );
