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

const selectedFIlterMap = {
  freeLobby: 'لابی های رایگان',
  paidLobby: 'لابی های پرداختی',
  squad: 'اسکوادی',
  killie: 'کیلی',
  autoRevive: 'اتوریوایو',
  searchAndDistro: 'سرچ اند دیستروی',
  hardpoint: 'هاردپوینت',
  myRankLobbies: 'لابی های با رنک مجاز من',
  rankOnlyLobby: 'لابی های با رنک مجاز من', // FIX: Its must replace with myRankLobbies
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
    // console.log('[HomeFilters] searchParams', searchParams);

    const defaultValues = {};
    defaultValueNames.forEach((name) => {
      defaultValues[name] = searchParams.get(name) === 'true';
    });
    return defaultValues;
  }, [defaultValueNames]);

  const methods = useForm({ defaultValues, mode: 'onChange' });

  const toggleFilter = useCallback(
    (filter) => {
      const has = searchParams.has(filter.key);

      if (has) searchParams.delete(filter.key);
      else searchParams.set(filter.key, 'true');

      setSearchParams(searchParams, { replace: true });

      // Set to form values
      methods.setValue(filter.key, !has);
    },
    [searchParams, methods],
  );

  const selectedFiltersExceptSuggested = useMemo(() => {
    let result = [];
    let a = searchParams.forEach((value, key) => {
      if (
        defaultValueNames.includes(key) &&
        !suggestedFilters[gameMode]?.some((filter) => filter.key === key)
      ) {
        return result.push(key);
      }
    });
    console.log('[selectedFiltersExceptSuggested] result', result);

    return result;
  }, [searchParams, gameMode]);

  // Handle filter chips horizental scrol
  useHorizentalScroll(containerRef);

  useEffect(() => {
    methods.reset(defaultValues);
  }, [defaultValues]);

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
          const active = searchParams.get(key);
          const iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';

          return (
            <FilterChip
              active={active}
              key={key}
              label={selectedFIlterMap[key]}
              onClick={() => toggleFilter({ key })}
            />
          );
        })}

        {/* Filters Chips */}
        {suggestedFilters[gameMode]?.map((filter) => {
          const active = searchParams.get(filter.key);
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
