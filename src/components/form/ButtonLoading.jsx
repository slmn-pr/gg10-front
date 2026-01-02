import { Box, Stack, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ButtonLoading() {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap="6px" p="8px">
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 0 ? theme.palette.custom.white : theme.palette.custom.grey1,
        }}
      ></Box>

      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 1 ? theme.palette.custom.white : theme.palette.custom.grey1,
        }}
      ></Box>

      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor:
            activeIndex === 2 ? theme.palette.custom.white : theme.palette.custom.grey1,
        }}
      ></Box>
    </Stack>
  );
}
