import { Stack } from '@mui/material';
import FilterChip from './components/FilterChip';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';
import { useTheme } from '@mui/material/styles';
import SearchAndDestroyIcon from '@/components/icons/chip/SearchAndDestroyIcon';
import { FormProvider, useForm } from 'react-hook-form';
import useHorizentalScroll from './hooks/useHorizenatlScroll';
import HardPointIcon from '@/components/icons/HardPointIcon';
import MyLobbiesRankIcon from '@/components/icons/MyLobbiesRankIcon';

// Complete filter map organized by game mode
const filterMap = {
  'battle-royal': {
    solo: 'سولو',
    double: 'دابل',
    trios: 'تریو',
    squad: 'اسکوادی',
    killie: 'کیلی',
    ranked: 'جایگاهی',
    tagie: 'تگی',
    autoRevive: 'اتو ریوایو',
    freeLobby: 'لابی های رایگان',
    rankOnlyLobby: 'لابی های با رنک مجاز من',
  },
  multiplayer: {
    searchAndDistro: 'سرچ اند دیستروی',
    hardpoint: 'هاردپوینت',
    freeForAll: 'فری فور آل',
    duo: 'دوئل',
    freeLobby: 'لابی های رایگان',
    rankOnlyLobby: 'لابی های با رنک مجاز من',
    myRankLobbies: 'لابی های رنک من',
  },
};

// Legacy map for backward compatibility (can be removed if not used elsewhere)
const selectedFIlterMap = {
  ...filterMap['battle-royal'],
  ...filterMap['multiplayer'],
};

const suggestedFilters = {
  'battle-royal': [
    { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
    { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
    { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
  ],
  multiplayer: [
    {
      label: 'سرچ اند دیستروی',
      icon: SearchAndDestroyIcon,
      key: 'searchAndDistro',
    },
    { label: 'هاردپوینت', icon: HardPointIcon, key: 'hardpoint' },
    { label: 'لابی های رنک من', icon: MyLobbiesRankIcon, key: 'myRankLobbies' },
  ],
};

export default function HomeFilters() {
  const containerRef = useRef(null);
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = useMemo(
    () => (searchParams.get('gameMode') ? searchParams.get('gameMode') : 'multiplayer'),
    [searchParams],
  );

  const defaultValueNames = useMemo(() => {
    return gameMode === 'multiplayer'
      ? Object.keys(MULTIPLAYER_DEFAULT_VALUES)
      : Object.keys(BATTLE_ROYAL_DEFAULT_VALUES);
  }, [gameMode]);

  // console.log('[HomeFilters] defaultValues', defaultValues);

  const defaultValues = useMemo(() => {
    const defaultValues = {};
    defaultValueNames.forEach((name) => {
      defaultValues[name] = searchParams.get(name) === 'true';
    });
    return defaultValues;
  }, [defaultValueNames, searchParams]);

  const methods = useForm({ defaultValues, mode: 'onChange' });

  const toggleFilter = useCallback(
    (filter) => {
      const newParams = new URLSearchParams(searchParams);
      const has = newParams.has(filter.key);

      if (has) {
        newParams.delete(filter.key);
      } else {
        newParams.set(filter.key, 'true');
      }

      setSearchParams(newParams, { replace: true });

      // Set to form values
      methods.setValue(filter.key, !has);
    },
    [searchParams, setSearchParams, methods],
  );

  const selectedFiltersExceptSuggested = useMemo(() => {
    const result = [];
    const suggestedKeys = suggestedFilters[gameMode]?.map((filter) => filter.key) || [];

    // Get all active filter keys from searchParams
    defaultValueNames.forEach((key) => {
      const isActive = searchParams.get(key) === 'true';
      const isNotSuggested = !suggestedKeys.includes(key);

      if (isActive && isNotSuggested) {
        result.push(key);
      }
    });

    return result;
  }, [searchParams, gameMode, defaultValueNames]);

  // Handle filter chips horizental scrol
  useHorizentalScroll(containerRef);

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues, methods]);

  return (
    <>
      <Stack
        ref={containerRef}
        direction="row"
        gap={1}
        sx={{
          direction: 'rtl',

          mb: 3,
          pb: 1,
          overflowX: 'auto',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',

          cursor: 'grab',
          userSelect: 'none',

          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },

          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },

          WebkitOverflowScrolling: 'touch',

          // Smooth scroll animation
          scrollBehavior: 'smooth',
        }}
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

        {/* Also render selected filters except suggested filters */}
        {selectedFiltersExceptSuggested.map((key) => {
          const active = searchParams.get(key) === 'true';
          const label = filterMap[gameMode]?.[key] || selectedFIlterMap[key] || key;

          return (
            <FilterChip
              active={active}
              key={key}
              label={label}
              onClick={() => toggleFilter({ key })}
            />
          );
        })}

        {/* Filters Chips */}
        {suggestedFilters[gameMode]?.map((filter) => {
          const active = searchParams.get(filter.key) === 'true';
          const iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';

          return (
            <FilterChip
              active={active}
              key={filter.label}
              icon={<filter.icon color={iconColor} />}
              label={filter.label}
              onClick={() => toggleFilter(filter)}
            />
          );
        })}
      </Stack>
    </>
  );
}
