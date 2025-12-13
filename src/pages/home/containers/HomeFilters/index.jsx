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

const filters = [
  { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
  { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
  { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
  {
    label: 'سرچ اند دیستروی',
    icon: SearchAndDestroyIcon,
    key: 'searchAndDistro',
  },
];

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
        gap={2}
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

        {/* Filters Chips */}
        {filters.map((filter) => {
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
