import { Stack, useTheme } from '@mui/material';
import FilterChip from './components/FilterChip';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useMemo } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';
import SearchAndDestroyIcon from '@/components/icons/chip/SearchAndDestroyIcon';
import { FormProvider, useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import HardPointIcon from '@/components/icons/HardPointIcon';
import MyLobbiesRankIcon from '@/components/icons/MyLobbiesRankIcon';
import getDefaultValueNames from './utils';
import useSmoothHorizentalScroll from './hooks/useSmoothHorizentalScroll';

// Placeholder icons for filters that don't have icons yet
// TODO: Replace with actual icons when available
const SoloChipIcon = SquadChipIcon;
const DoubleChipIcon = SquadChipIcon;
const TriosChipIcon = SquadChipIcon;
const RankedChipIcon = KillChipIcon;
const TagieChipIcon = AutoReviveChipIcon;
const FreeLobbyChipIcon = KillChipIcon;
const RankOnlyLobbyChipIcon = MyLobbiesRankIcon;
const FreeForAllChipIcon = HardPointIcon;
const DuoChipIcon = SquadChipIcon;

const suggestedFilters = {
  'battle-royal': {
    suggested: [
      { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
      { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
      { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
    ],
    all: [
      { label: 'سولو', icon: SoloChipIcon, key: 'solo' },
      { label: 'دابل', icon: DoubleChipIcon, key: 'double' },
      { label: 'تریو', icon: TriosChipIcon, key: 'trios' },
      { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
      { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
      { label: 'جایگاهی', icon: RankedChipIcon, key: 'ranked' },
      { label: 'تگی', icon: TagieChipIcon, key: 'tagie' },
      { label: 'اتو ریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
      { label: 'لابی های رایگان', icon: FreeLobbyChipIcon, key: 'freeLobby' },
      {
        label: 'لابی های با رنک مجاز من',
        icon: RankOnlyLobbyChipIcon,
        key: 'rankOnlyLobby',
      },
    ],
  },
  multiplayer: {
    suggested: [
      {
        label: 'سرچ اند دیستروی',
        icon: SearchAndDestroyIcon,
        key: 'searchAndDistro',
      },
      { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
      { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
    ],
    all: [
      { label: 'سرچ اند دیستروی', icon: SearchAndDestroyIcon, key: 'searchAndDistro' },
      { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
      { label: 'فری فور آل', icon: FreeForAllChipIcon, key: 'freeForAll' },
      { label: 'دوئل', icon: DuoChipIcon, key: 'duo' },
      { label: 'لابی های رایگان', icon: FreeLobbyChipIcon, key: 'freeLobby' },
      {
        label: 'لابی های با رنک مجاز من',
        icon: RankOnlyLobbyChipIcon,
        key: 'rankOnlyLobby',
      },
      { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
    ],
  },
};

/**
 * Get filter info by key from the all filters array
 */
const getFilterByKey = (gameMode, key) => {
  return suggestedFilters[gameMode]?.all.find((filter) => filter.key === key);
};

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
    const suggestedKeys = suggestedFilters[gameMode]?.suggested.map((f) => f.key) || [];
    const allFilters = suggestedFilters[gameMode]?.all || [];

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
    () => suggestedFilters[gameMode]?.suggested || [],
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
