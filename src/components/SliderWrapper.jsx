import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper } from 'swiper/react';
import { Box, useTheme } from '@mui/material';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRTL } from '@/app/providers/rtl-provider';

/**
 * @typedef {Object} Slide
 * @property {number} id - Unique identifier for the slide
 * @property {string} title - Main title text
 * @property {string} [highlight] - Optional word to highlight in the title
 * @property {string} subtitle - Subtitle text
 * @property {string} image - Image URL or path
 */

/**
 * HeroSlider Component
 * A production-ready, responsive hero slider with RTL support, autoplay, and custom pagination
 *
 * @param {Object} props
 * @param {Slide[]} props.slides - Array of slide objects
 * @param {number} [props.autoplayDelay=3000] - Autoplay delay in milliseconds
 * @param {boolean} [props.loop=true] - Enable loop mode
 */
export default function SliderWrapper({ children, autoplayDelay = 3000, loop = true }) {
  const theme = useTheme();
  const { direction } = useRTL();

  return (
    <Box
      sx={{
        width: '100%',
        // height: 130,
        borderRadius: 2,
        overflow: 'visible',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        mb: 1,
      }}
    >
      <Box
        sx={{
          '& .swiper-slide': {
            height: { xs: '200px', sm: '240px', md: '280px' },
          },
        }}
      >
        <Swiper
          height={130}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={loop}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
            // renderCustomBullets: (swiper, total, current) => {
            //   return `<span class="swiper-pagination-bullet">${current + 1}</span>`;
            // },
          }}
          dir={direction}
          rtl={direction === 'rtl'}
          spaceBetween={0}
          slidesPerView={1}
        >
          {children}
        </Swiper>
      </Box>

      {/* Custom Pagination Styles */}
      <Box
        className="swiper-pagination"
        sx={{
          transform: 'translateX(-50%)',
          '&.swiper-pagination': {
            bottom: '-10px !important',
            left: '50% !important',
            transform: 'translateX(-50%) !important',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2px',
          },
          '& .swiper-pagination-bullet': {
            width: '6px',
            height: '6px',
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: theme.palette.custom.greyOnBg1,
            borderRadius: '50%',
          },
        }}
      />
    </Box>
  );
}
