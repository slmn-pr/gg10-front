import { Drawer, Typography, Box, Stack, Button } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import { useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';

export default function FiltersDrawer({ containerElement }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <FilterChip
        label="فیلترها"
        icon={<FilterChipIcon />}
        onClick={() => setOpen(true)}
      />
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        container={containerElement}
        sx={{
          zIndex: 999, // بالاتر از bottom-navigation که zIndex: 1000 دارد
          '& .MuiDrawer-paper': {
            maxWidth: '600px', // maxWidth="sm" در Material-UI حدود 600px است
            width: '100%',
            mx: 'auto',
            mb: 5,
            minHeight: 200,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            bgcolor: 'custom.modalBg',
          },
        }}
        BackdropProps={{
          sx: {
            // backgroundColor: 'rgba(0, 0, 0, 0.5)',
            // overlay فقط تا بالای bottom-navigation می‌آید
            bottom: '70px', // ارتفاع bottom-navigation
          },
        }}
      >
        <Stack spacing={2} sx={{ py: 2, px: 5 }}>
          {/* Header */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <CloseIcon />
            <Typography variant="h6">فیلتر ها</Typography>
          </Stack>

          {/* Content */}
          <Box>Content here ...</Box>

          {/* Footer buttons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="text" color="primary">
              <Typography
                variant="button1"
                color="custom.deleteOnModal"
                sx={{
                  textDecoration: 'underline',
                  textUnderlineOffset: 7,
                }}
              >
                حذف فیلترها
              </Typography>
            </Button>

            <Button
              variant="outlined"
              color="custom.whiteOnBg1"
              sx={{ flex: 1 }}
              size="large"
            >
              <Typography variant="button2" color="custom.whiteOnBg1">
                اعمال فیلترها
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
