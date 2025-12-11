import { Box, Stack } from '@mui/material';
import FilterChip from './components/FilterChip';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useMemo, useRef } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';
import { BATTLE_ROYAL_DEFAULT_VALUES, MULTIPLAYER_DEFAULT_VALUES } from './conts';
import { useTheme } from '@mui/material/styles';
import SearchAndDestroyIcon from '@/components/icons/chip/SearchAndDestroyIcon';

const filters = [
  { label: 'اسکوادی', icon: SquadChipIcon, key: 'squad' },
  { label: 'کیلی', icon: KillChipIcon, key: 'killie' },
  { label: 'اتوریوایو', icon: AutoReviveChipIcon, key: 'autoRevive' },
  {
    label: 'سرچ اند دیستروی',
    icon: SearchAndDestroyIcon,
    key: 'searchAndDistribute',
  },
];

export default function HomeFilters() {
  const containerElement = useRef(null);
  const theme = useTheme();

  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = useMemo(
    () => (searchParams.get('gameMode') ? searchParams.get('gameMode') : 'multiplayer'),
    [searchParams],
  );

  const defaultValueNames = useMemo(() => {
    if (gameMode === 'multiplayer') return Object.keys(MULTIPLAYER_DEFAULT_VALUES);
    else return Object.keys(BATTLE_ROYAL_DEFAULT_VALUES);
  }, [gameMode]);

  // Read default values from search params base defaultValueNames
  const defaultValues = useMemo(() => {
    let res = {};

    for (let i of defaultValueNames) {
      res[i] = searchParams.get(i) ? Boolean(searchParams.get(i)) : false;
    }
    return res;
  }, [defaultValueNames]);

  const toggleFilter = useCallback(
    (filter) => {
      if (searchParams.has(filter.key)) {
        searchParams.delete(filter.key);
      } else {
        searchParams.set(filter.key, 'true');
      }
      setSearchParams(searchParams, { replace: true });
    },
    [searchParams],
  );
  return (
    <>
      {/* <Box>{JSON.stringify(defaultValues)}</Box>; */}
      <Stack
        ref={containerElement}
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        sx={{ mb: 3, overflowX: 'auto', pb: 1 }}
      >
        {filters.map((filter) => {
          let active = searchParams.get(filter.key);
          let iconColor = active ? theme.palette.custom.blackOnPrimary : 'white';
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
        <FiltersDrawer defaultValues={defaultValues}>
          {gameMode === 'multiplayer' ? (
            <MultiplayerFilterForm />
          ) : (
            <BattleRoyalFilterForm />
          )}
        </FiltersDrawer>
      </Stack>
    </>
  );
}
