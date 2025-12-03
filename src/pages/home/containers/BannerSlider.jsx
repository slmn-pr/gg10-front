import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, useTheme } from '@mui/material';
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
export default function HeroSlider({ slides = [], autoplayDelay = 3000, loop = true }) {
  const theme = useTheme();
  const { direction } = useRTL();

  // Default slides if none provided
  const defaultSlides = [
    {
      id: 1,
      title: 'به GG10 خوش آمدید',
      highlight: 'GG10',
      subtitle: 'بهترین تجربه بازی آنلاین را با ما تجربه کنید',
      image: '/images/lobby/bg-hero.png',
    },
    {
      id: 2,
      title: 'مسابقات هیجان‌انگیز',
      highlight: 'مسابقات',
      subtitle: 'در مسابقات مختلف شرکت کنید و برنده جوایز شوید',
      image: '/images/lobby/bg-hero.png',
    },
    {
      id: 3,
      title: 'جامعه بزرگ بازیکنان',
      highlight: 'جامعه',
      subtitle: 'به جامعه هزاران بازیکن بپیوندید',
      image: '/images/lobby/bg-hero.png',
    },
  ];

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
    <Box
      sx={{
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        mb: 2,
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
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={loop}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
            renderCustomBullets: (swiper, total, current) => {
              return `<span class="swiper-pagination-bullet">${current + 1}</span>`;
            },
          }}
          dir={direction}
          rtl={direction === 'rtl'}
          spaceBetween={0}
          slidesPerView={1}
        >
          {slidesToRender.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  '&:hover .hero-image': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  className="hero-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />

                {/* Dark Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Content Overlay */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    px: 3,
                    py: 4,
                  }}
                >
                  {/* Title with Highlight */}
                  <Box sx={{ mb: 1.5 }}>{renderTitle(slide.title, slide.highlight)}</Box>

                  {/* Subtitle */}
                  <Typography
                    variant="sub1"
                    sx={{
                      color: theme.palette.text.primary,
                      maxWidth: { xs: '100%', sm: '80%', md: '70%' },
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Custom Pagination Styles */}
      <Box
        sx={{
          transform: 'translateX(-50%)',
          '& .swiper-pagination': {
            bottom: '16px !important',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          },
          '& .swiper-pagination-bullet': {
            width: '8px',
            height: '8px',
            backgroundColor: 'red',
            opacity: 1,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            margin: '0 4px !important',
          },
          '& .swiper-pagination-bullet-active': {
            backgroundColor: theme.palette.custom.primaryOnBg2,
            width: '24px',
            borderRadius: '4px',
          },
        }}
      />
    </Box>
  );
}
