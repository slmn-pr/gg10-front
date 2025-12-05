import { Drawer, Typography, Box, Stack, Button } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import { useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';

export default function FiltersDrawer({ children }) {
  const [open, setOpen] = useState(true);

  // const methods = useForm();

  const isDiabled = true;

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
        sx={{
          zIndex: 999, // higher than bottom navigation which has zIndex: 1000
          '& .MuiDrawer-paper': {
            maxWidth: 'sm', // maxWidth="sm" in Material-UI is approximately 600px
            width: '100%',
            mx: 'auto',
            mb: 6,
            height: 'auto',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            bgcolor: 'custom.modalBg',
          },
        }}
        BackdropProps={{
          sx: {
            bottom: '70px', // bottom navigation height
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
          <Box>{children}</Box>

          {/* Footer buttons */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 5 }}>
            <Button variant="text" color="primary" disabled={isDiabled}>
              <Typography
                variant="button2"
                color={isDiabled ? 'custom.disabledGreyOnBg2' : 'custom.deleteOnModal'}
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
              color={isDiabled ? 'custom.disabledGreyOnBg2' : 'custom.whiteOnBg1'}
              sx={{ flex: 1, borderRadius: 8 }}
              size="large"
              disabled={isDiabled}
            >
              <Typography
                variant="button1"
                color={isDiabled ? 'custom.disabledGreyOnBg2' : 'custom.whiteOnBg1'}
              >
                اعمال فیلترها
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
