import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import NoResultIcon from './NoResultIcon';
import ResultSlider from './ResultSlider';

export default function ResultsSection() {
  const [content, setContent] = useState('Hello');

  return (
    <Box sx={{ mt: '24px', width: '100%' }}>
      {!content && (
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <NoResultIcon />
          <Typography
            component="p"
            variant="title3"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            این بازی هنوز تمام نشده است. بعد از پایان، نتایج در این بخش ثبت می‌شوند
          </Typography>
        </Stack>
      )}

      {content && (
        <Stack spacing={2} sx={{ zIndex: 1000 }}>
          <Typography
            component="p"
            variant="title3"
            color="white"
            sx={{ textAlign: 'right', direction: 'rtl' }}
          >
            نتایج بازی به شرح زیر است:
          </Typography>

          <ResultSlider />
        </Stack>
      )}
    </Box>
  );
}
