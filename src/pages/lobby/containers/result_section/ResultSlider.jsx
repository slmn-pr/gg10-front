import SliderWrapper from '@/components/SliderWrapper';
import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';

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
];

export default function ResultSlider() {
  return (
    <Box>
      <SliderWrapper>
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id} style={{ height: '120px', borderRadius: '8px' }}>
            <Box sx={{ position: 'relative', height: '120px', overflow: 'hidden' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </SliderWrapper>
    </Box>
  );
}
