import SliderWrapper from '@/components/SliderWrapper';
import { Box, Drawer, Stack, IconButton, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@/components/icons/general/CloseIcon';

const sliderItems = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/71P-hM1d7XL._SX679_.jpg',
    title: 'Item 1',
  },

  {
    id: 2,
    image:
      'https://wallpapers.com/images/high/4k-call-of-duty-mobile-soldiers-4itlo1m4y9ndmpko.webp',
    title: 'Item 2',
  },
  {
    id: 3,
    image:
      'https://wallpapers.com/images/high/4k-call-of-duty-rubble-9ftcdlk5t7ltum5c.webp',
    title: 'Item 3',
  },
];

export default function ResultSlider() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const theme = useTheme();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setDrawerOpen(true);
  };

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const selectedImage = sliderItems[selectedImageIndex];

  return (
    <>
      <Box>
        <SliderWrapper>
          {sliderItems.map((item, index) => (
            <SwiperSlide key={item.id} style={{ height: '155px', borderRadius: '8px' }}>
              <Box
                sx={{
                  position: 'relative',
                  height: '155px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </SliderWrapper>
      </Box>

      <Drawer
        anchor="bottom"
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          zIndex: 999,
          '& .MuiBackdrop-root': {
            maxWidth: 'sm',
            mx: 'auto',
          },
          '& .MuiDrawer-paper': {
            maxWidth: 'sm',
            width: '100%',
            mx: 'auto',
            mb: 6,
            height: 'auto',
            maxHeight: '90vh',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            bgcolor: theme.palette.custom.modalBg,
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        BackdropProps={{
          sx: {
            bottom: '70px',
          },
        }}
      >
        <Stack
          spacing={0}
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          {/* Header */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ px: 2, pt: 2 }}
          >
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">تصاویر</Typography>
            <Box sx={{ width: 40 }} /> {/* Spacer for centering */}
          </Stack>

          {/* Main Image Display */}
          <Box
            sx={{
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 2,
              py: 2,
              minHeight: 0,
            }}
          >
            {selectedImage && (
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            )}
          </Box>

          {/* Thumbnail Scroll */}
          <Box
            sx={{
              width: '100%',
              px: 2,
              pb: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              pt: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                overflowX: 'auto',
                overflowY: 'hidden',
                pb: 1,
                '&::-webkit-scrollbar': {
                  height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: theme.palette.custom.greyOnBg1,
                  borderRadius: '2px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {sliderItems.map((item, index) => (
                <Box
                  key={item.id}
                  onClick={() => handleThumbnailClick(index)}
                  sx={{
                    minWidth: '80px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border:
                      selectedImageIndex === index
                        ? `2px solid ${theme.palette.primary.main}`
                        : `2px solid transparent`,
                    opacity: selectedImageIndex === index ? 1 : 0.7,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
