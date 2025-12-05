import { Drawer, Typography, Box, Stack, Button, IconButton } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';

export default function FiltersDrawer({ children, defaultValues }) {
  const [open, setOpen] = useState(true);
  const [searchParams] = useSearchParams();

  const gameMode = searchParams.get('gameMode') || 'multiplayer';

  const methods = useForm({
    defaultValues:
      defaultValues || gameMode === 'multiplayer'
        ? MULTIPLAYER_DEFAULT_VALUES
        : BATTLE_ROYAL_DEFAULT_VALUES,
    mode: 'onChange',
  });

  const formValues = methods.watch();

  const activeFilters = Object.entries(formValues)
    .filter(([key, value]) => value === true)
    .map(([key]) => key);

  const resetFilters = useCallback(() => {
    if (gameMode === 'multiplayer') {
      methods.reset(MULTIPLAYER_DEFAULT_VALUES);
    } else {
      methods.reset(BATTLE_ROYAL_DEFAULT_VALUES);
    }
  }, [methods, gameMode]);

  const isDiabled = useMemo(
    () => Object.values(formValues).every((value) => value === false),
    [formValues],
  );

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
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">فیلتر ها</Typography>
          </Stack>

          {/* Content */}
          <Box>
            <FormProvider {...methods}>{children}</FormProvider>
          </Box>

          {/* Footer buttons */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ pb: 5 }}>
            <Button
              variant="text"
              color="primary"
              disabled={isDiabled}
              onClick={resetFilters}
            >
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
                <span> اعمال فیلترها</span>
                {activeFilters.length > 0 && <span>({activeFilters.length})</span>}
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
