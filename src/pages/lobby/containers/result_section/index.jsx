import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import NoResultIcon from './NoResultIcon';

export default function ResultsSection() {
  const [content, setContent] = useState(null);

  return (
    <Box sx={{ mt: '24px' }}>
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
    </Box>
  );
}
