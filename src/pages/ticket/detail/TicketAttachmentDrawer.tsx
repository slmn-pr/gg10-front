import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import type { TicketAttachment } from './hooks/useTicketAttachments';

interface TicketAttachmentDrawerProps {
  open: boolean;
  onClose: () => void;
  attachments: TicketAttachment[];
  initialIndex: number;
}

export default function TicketAttachmentDrawer({
  open,
  onClose,
  attachments,
  initialIndex,
}: TicketAttachmentDrawerProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (open && swiperRef.current) {
      swiperRef.current.slideTo(initialIndex, 0);
    }
  }, [open, initialIndex]);

  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: '85vh',
          bgcolor: '#0A0A0A',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        },
      }}
    >
      <Stack sx={{ height: '100%' }}>
        <Stack direction="row" justifyContent="flex-end" sx={{ p: 1 }}>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </Stack>

        {attachments.length === 0 ? (
          <Typography color="white" textAlign="center" mt={4}>
            فایلی برای نمایش وجود ندارد
          </Typography>
        ) : (
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            initialSlide={initialIndex}
            style={{ width: '100%', flex: 1 }}
          >
            {attachments.map((attachment) => (
              <SwiperSlide
                key={attachment.url}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                  }}
                >
                  {attachment.type === 'video' ? (
                    <Box
                      component="video"
                      src={attachment.url}
                      controls
                      sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={attachment.url}
                      alt={attachment.fileName}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: '8px',
                      }}
                    />
                  )}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Stack>
    </Drawer>
  );
}
