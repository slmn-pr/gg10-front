import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function GG10Loading() {
  const [activeIndex, setActiveIndex] = useState(0); // change each 500 ms

  useEffect(() => {
    let intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === 2) return 0;

        return prev + 1;
      }); // round by 3
    }, 300);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Russo One',
          fontWeight: 500,
          display: 'flex',
          direction: 'ltr',
          fontSize: '32px',
          lineHeight: '32px',
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            lineHeight: 'inherit',
          }}
        >
          GG
        </Typography>
        10
      </Typography>

      {/* 3 dots */}
      <Stack direction="row" spacing="6px">
        {Array.from(Array(3)).map((_, index) => (
          <Box
            bgcolor={index === activeIndex ? 'custom.shade1' : 'custom.grey0'}
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '60%',
            }}
          ></Box>
        ))}
      </Stack>
    </Box>
  );
}
