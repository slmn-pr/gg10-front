// src/pages/containers/HomeFIlters/index.jsx

import { Stack, useTheme } from '@mui/material';
import FilterChip from './components/FilterChip';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useMemo } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';
import { FormProvider, useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import getDefaultValueNames from './utils';
import useSmoothHorizentalScroll from './hooks/useSmoothHorizentalScroll';
import { FILTERS_MAP } from './conts';

export default function HomeFilters() {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  // Use custom hook for horizontal scroll logic
  const { containerRef, motionProps, scrollStyles } = useSmoothHorizentalScroll();

  const gameMode = useMemo(
    () => searchParams.get('game_mode') || 'multiplayer',
    [searchParams],
  );

  const defaultValueNames = useMemo(() => getDefaultValueNames(gameMode), [gameMode]);

  // Load filter values from search params
  const defaultValues = useMemo(() => {
    const values = {};
    defaultValueNames.forEach((name) => {
      values[name] = searchParams.get(name) === 'true';
    });
    return values;
  }, [defaultValueNames, searchParams]);

  const methods = useForm({ defaultValues, mode: 'onChange' });

  const toggleFilter = useCallback(
    (filter) => {
      const newParams = new URLSearchParams(searchParams);
      const isActive = newParams.get(filter.key) === 'true';

      if (isActive) {
        newParams.delete(filter.key);
      } else {
        newParams.set(filter.key, 'true');
      }

      // Update form value to keep it in sync
      methods.setValue(filter.key, !isActive, {
        shouldValidate: false,
        shouldDirty: false,
      });

      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams, methods],
  );

  // Get active filters that are not in suggested list
  const activeNonSuggestedFilters = useMemo(() => {
    const suggestedKeys = FILTERS_MAP[gameMode]?.suggested.map((f) => f.key) || [];
    const allFilters = FILTERS_MAP[gameMode]?.all || [];

    // Get all active filter keys from search params
    const activeKeys = defaultValueNames.filter(
      (key) => searchParams.get(key) === 'true' && !suggestedKeys.includes(key),
    );

    // Map to filter objects from the all array
    return activeKeys
      .map((key) => allFilters.find((filter) => filter.key === key))
      .filter(Boolean); // Remove undefined entries
  }, [searchParams, gameMode, defaultValueNames]);

  // Get suggested filters for current game mode
  const suggestedFiltersList = useMemo(
    () => FILTERS_MAP[gameMode]?.suggested || [],
    [gameMode],
  );

  return (
    <Stack
      component={motion.div}
      direction="row"
      gap={1}
      ref={containerRef}
      {...motionProps}
      sx={scrollStyles}
    >
      {/* Filters Drawer */}
      <FormProvider {...methods}>
        <FiltersDrawer>
          {gameMode === 'multiplayer' ? (
            <MultiplayerFilterForm />
          ) : (
            <BattleRoyalFilterForm />
          )}
        </FiltersDrawer>
      </FormProvider>

      {/* Active filters that are not suggested */}
      {activeNonSuggestedFilters.map((filter) => {
        const active = searchParams.get(filter.key) === 'true';
        const iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';

        return (
          <FilterChip
            key={filter.key}
            active={active}
            icon={filter.icon && <filter.icon color={iconColor} />}
            label={filter.label}
            onClick={() => toggleFilter(filter)}
          />
        );
      })}

      {/* Suggested filters */}
      {suggestedFiltersList.map((filter) => {
        const active = searchParams.get(filter.key) === 'true';
        const iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';

        return (
          <FilterChip
            key={filter.key}
            active={active}
            icon={<filter.icon color={iconColor} />}
            label={filter.label}
            onClick={() => toggleFilter(filter)}
          />
        );
      })}
    </Stack>
  );
}
