import { Drawer, Typography, Box, Stack, Button, IconButton } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@/components/icons/general/CloseIcon';
import { useSearchParams } from 'react-router-dom';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';
import { useTheme } from '@mui/material/styles';
import { useFormContext, useWatch } from 'react-hook-form';
import FilterDrawerToggler from './components/FilterDrawerToggler';

export default function FiltersDrawer({ children }) {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const theme = useTheme();
  const gameMode = searchParams.get('gameMode') || 'multiplayer';

  const { watch } = useFormContext();
  const formValues = watch();
  const activeFilters = useMemo(() => {
    console.log('[HomeFilters] formValues', formValues);
    return Object.keys(formValues).filter((key) => formValues[key]);
  }, [formValues, searchParams]);

  useEffect(() => {
    console.log('[FiltersDrawer] activeFilters', activeFilters);
  }, [activeFilters]);

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

    setOpen(false);
  }, [gameMode, searchParams, setSearchParams]);

  const applyFilters = useCallback(() => {
    const currentParams = new URLSearchParams(searchParams);

    const baseDefaults =
      gameMode === 'multiplayer'
        ? MULTIPLAYER_DEFAULT_VALUES
        : BATTLE_ROYAL_DEFAULT_VALUES;

    // پاک کردن params قدیمی
    Object.keys(baseDefaults).forEach((key) => {
      currentParams.delete(key);
    });

    // اضافه‌کردن فقط فیلترهای فعال (true)
    Object.entries(formValues).forEach(([key, value]) => {
      if (value === true && baseDefaults.hasOwnProperty(key)) {
        currentParams.set(key, 'true');
      }
    });

    setSearchParams(currentParams, { replace: true });
    setOpen(false);
  }, [gameMode, searchParams, setSearchParams, formValues]);

  const isDiabled = Object.values(formValues).every((value) => value === false);

  // Clean up old filter params when gameMode changes
  useEffect(() => {
    let sources =
      gameMode === 'multiplayer'
        ? BATTLE_ROYAL_DEFAULT_VALUES
        : MULTIPLAYER_DEFAULT_VALUES;
    Object.keys(sources).forEach((key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams, { replace: true });

    // methods.reset(sources);
  }, [gameMode]);

  return (
    <>
      <FilterDrawerToggler
        active={activeFilters.length > 0}
        label={
          <Typography
            variant="subtitle2"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}
          >
            <span>فیلترها</span>
            {activeFilters.length > 0 && <span>({activeFilters.length})</span>}
          </Typography>
        }
        icon={
          <FilterChipIcon
            color={
              activeFilters.length > 0 ? theme.palette.custom.blackOnPrimary : 'white'
            }
          />
        }
        onClick={() => setOpen(true)}
      />
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
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
        <Stack spacing={2} sx={{ py: 2, px: 2 }}>
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
          <Box>{children}</Box>

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
              sx={{ flex: 1, borderRadius: 2 }}
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
