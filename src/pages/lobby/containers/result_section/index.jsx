import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import NoResultIcon from './NoResultIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ResultSlider from './ResultSlider';

const sliderItems = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71P-hM1d7XL._SX679_.jpg',
    title: 'Item 1',
  },

  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71P-hM1d7XL._SX679_.jpg',
    title: 'Item 2',
  },

  {
    id: 3,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWJgwzbZmDbken0mXjc4idbPF-3HRilVQvw&s',
    title: 'Item 3',
  },
];

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
        <Stack spacing={2}>
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
