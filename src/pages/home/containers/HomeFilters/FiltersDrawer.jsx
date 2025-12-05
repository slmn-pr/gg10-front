import { Drawer, Typography, Box, Stack, Button, IconButton } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';
import { FormProvider, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';

export default function FiltersDrawer({ children, defaultValues }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = searchParams.get('gameMode') || 'multiplayer';

  // Get default values based on game mode
  const getDefaultValues = useCallback(() => {
    const baseDefaults =
      gameMode === 'multiplayer'
        ? MULTIPLAYER_DEFAULT_VALUES
        : BATTLE_ROYAL_DEFAULT_VALUES;

    // Parse filter values from search params
    const paramsDefaults = { ...baseDefaults };
    Object.keys(baseDefaults).forEach((key) => {
      const paramValue = searchParams.get(key);
      if (paramValue === 'true') {
        paramsDefaults[key] = true;
      } else if (paramValue === 'false') {
        paramsDefaults[key] = false;
      }
    });

    // console.log('[getDefaultValues] paramsDefaults', paramsDefaults);

    return paramsDefaults;
  }, [gameMode, searchParams]);

  const methods = useForm({
    defaultValues: defaultValues || getDefaultValues(),
    mode: 'onChange',
  });

  // Clean up old filter params when gameMode changes
  // useEffect(() => {
  //   const currentParams = new URLSearchParams(searchParams);
  //   const currentGameModeDefaults =
  //     gameMode === 'multiplayer'
  //       ? MULTIPLAYER_DEFAULT_VALUES
  //       : BATTLE_ROYAL_DEFAULT_VALUES;
  //   const otherGameModeDefaults =
  //     gameMode === 'multiplayer'
  //       ? BATTLE_ROYAL_DEFAULT_VALUES
  //       : MULTIPLAYER_DEFAULT_VALUES;

  //   let hasChanges = false;

  //   // Remove filter params that belong to the other game mode
  //   Object.keys(otherGameModeDefaults).forEach((key) => {
  //     if (currentParams.has(key)) {
  //       currentParams.delete(key);
  //       hasChanges = true;
  //     }
  //   });

  //   // Calculate defaults from cleaned params
  //   const paramsDefaults = { ...currentGameModeDefaults };
  //   Object.keys(currentGameModeDefaults).forEach((key) => {
  //     const paramValue = currentParams.get(key);
  //     if (paramValue === 'true') {
  //       paramsDefaults[key] = true;
  //     } else if (paramValue === 'false') {
  //       paramsDefaults[key] = false;
  //     }
  //   });

  //   if (hasChanges) {
  //     setSearchParams(currentParams, { replace: true });
  //   }

  //   // Reset form with new defaults
  //   methods.reset(paramsDefaults);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [gameMode]);

  const formValues = methods.watch();

  const activeFilters = Object.entries(formValues)
    .filter(([key, value]) => value === true)
    .map(([key]) => key);

  const resetFilters = useCallback(() => {
    const currentParams = new URLSearchParams(searchParams);
    const baseDefaults =
      gameMode === 'multiplayer'
        ? MULTIPLAYER_DEFAULT_VALUES
        : BATTLE_ROYAL_DEFAULT_VALUES;

    // Remove all filter params
    Object.keys(baseDefaults).forEach((key) => {
      currentParams.delete(key);
    });

    setSearchParams(currentParams, { replace: true });

    if (gameMode === 'multiplayer') {
      methods.reset(MULTIPLAYER_DEFAULT_VALUES);
    } else {
      methods.reset(BATTLE_ROYAL_DEFAULT_VALUES);
    }
    setOpen(false);
  }, [methods, gameMode, searchParams, setSearchParams]);

  const applyFilters = useCallback(() => {
    const currentParams = new URLSearchParams(searchParams);
    const baseDefaults =
      gameMode === 'multiplayer'
        ? MULTIPLAYER_DEFAULT_VALUES
        : BATTLE_ROYAL_DEFAULT_VALUES;

    // Remove all old filter params
    Object.keys(baseDefaults).forEach((key) => {
      currentParams.delete(key);
    });

    // Add only active filters (true values) to search params
    Object.entries(formValues).forEach(([key, value]) => {
      if (value === true && baseDefaults.hasOwnProperty(key)) {
        currentParams.set(key, 'true');
      }
    });

    setSearchParams(currentParams, { replace: true });
    setOpen(false);
  }, [formValues, gameMode, searchParams, setSearchParams]);

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
              onClick={applyFilters}
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
