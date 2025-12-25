import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, useTheme } from '@mui/material';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRTL } from '@/app/providers/rtl-provider';
import SliderWrapper from '@/components/SliderWrapper';

// Default slides if none provided
const defaultSlides = [
  {
    id: 1,
    title: 'به GG10 خوش آمدید',
    highlight: 'GG10',
    subtitle: 'بهترین تجربه بازی آنلاین را با ما تجربه کنید',
    // image: '/images/banner_slide.png',
    image:
      'https://wallpapers.com/images/hd/4k-call-of-duty-mobile-poster-5c50tuqihdfcliuz.jpg',
  },
  {
    id: 2,
    title: 'مسابقات هیجان‌انگیز',
    highlight: 'مسابقات',
    subtitle: 'در مسابقات مختلف شرکت کنید و برنده جوایز شوید',
    // image: '/images/banner_slide.png',
    image:
      'https://w0.peakpx.com/wallpaper/328/326/HD-wallpaper-call-of-duty-mobile-season-8-2020-call-of-duty-mobile-games-2019-games-mobile-call-of-duty.jpg',
  },
  {
    id: 3,
    title: 'جامعه بزرگ بازیکنان',
    highlight: 'جامعه',
    subtitle: 'به جامعه هزاران بازیکن بپیوندید',
    // image: '/images/banner_slide.png',
    image:
      'https://img.goodfon.com/original/3840x2160/2/66/call-of-duty-mobile-season-3-cyber-mirage.jpg',
  },
  {
    id: 4,
    title: 'جامعه بزرگ بازیکنان',
    highlight: 'جامعه',
    subtitle: 'به جامعه هزاران بازیکن بپیوندید',
    image: '/images/banner_slide.png',
  },

  {
    id: 5,
    title: 'جامعه بزرگ بازیکنان',
    highlight: 'جامعه',
    subtitle: 'به جامعه هزاران بازیکن بپیوندید',
    image: '/images/banner_slide.png',
  },
];

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
export default function HeroSlider({ slides = [], autoplayDelay = 3000, loop = true }) {
  const theme = useTheme();
  const { direction } = useRTL();

  const slidesToRender = slides.length > 0 ? slides : defaultSlides;

  /**
   * Splits title text and highlights the specified word
   */
  const renderTitle = (title, highlight) => {
    if (!highlight) {
      return <Typography variant="title1">{title}</Typography>;
    }

    const parts = title.split(highlight);
    if (parts.length === 1) {
      return <Typography variant="title1">{title}</Typography>;
    }

    return (
      <Typography variant="title1" component="div">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < parts.length - 1 && (
              <Box component="span" sx={{ color: theme.palette.primary.main }}>
                {highlight}
              </Box>
            )}
          </span>
        ))}
      </Typography>
    );
  };

  return (
    <Box sx={{ height: '140px' }}>
      <SliderWrapper>
        {slidesToRender.map((slide) => (
          <SwiperSlide key={slide.id} style={{ height: '120px' }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </SwiperSlide>
        ))}
      </SliderWrapper>
    </Box>
  );
}
