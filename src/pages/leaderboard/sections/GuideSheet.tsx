import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
import GuideContent from './GuideContent';

export default function GuideSheet() {
  const theme = useTheme();

  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          color: 'custom.linkBlue',
          minWidth: 0,
          py: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: 0.5,
        }}
      >
        <InfoOutlinedIcon sx={{ fontSize: 18 }} />
        <Typography variant="sub2" color="custom.linkBlue">
          راهنمای رنک‌های لیدربورد: رنک‌ها چطور محاسبه شده‌اند؟
        </Typography>
      </Button>

      <Drawer
        anchor="bottom"
        variant="temporary"
        open={open}
        onClose={onClose}
        sx={{
          zIndex: 999, // higher than bottom navigation which has zIndex: 1000
          '& .MuiBackdrop-root': {
            maxWidth: 'sm', // maxWidth="sm" in Material-UI is approximately 600px
            mx: 'auto',
          },
          '& .MuiDrawer-paper': {
            maxWidth: 'sm', // maxWidth="sm" in Material-UI is approximately 600px
            width: '100%',
            mx: 'auto',
            mb: 6,
            height: 'auto',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            bgcolor: theme.palette.custom.modalBg,
            backgroundImage: 'none',
          },
        }}
        BackdropProps={{
          sx: {
            bottom: '70px', // bottom navigation height
          },
        }}
      >
        {' '}
        {/* Header */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          mb="38px"
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Typography variant="title2" color="white">
            راهنمای رنک ها
          </Typography>
        </Stack>
        <GuideContent />
      </Drawer>
    </Box>
  );
}
