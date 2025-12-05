import { Checkbox, FormControlLabel, Stack, SvgIcon } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useCallback, useMemo, useRef } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';

const filters = [
  { label: 'اسکوادی', icon: <SquadChipIcon />, key: 'squad' },
  { label: 'کیلی', icon: <KillChipIcon />, key: 'killie' },
  { label: 'اتوریوایو', icon: <AutoReviveChipIcon />, key: 'autoRevive' },
];

export default function HomeFilters() {
  const containerElement = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = useMemo(
    () => (searchParams.get('gameMode') ? searchParams.get('gameMode') : 'multiplayer'),
    [searchParams],
  );

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
    <Stack
      ref={containerElement}
      direction="row"
      justifyContent="flex-end"
      spacing={2}
      sx={{ mb: 3, overflowX: 'auto', pb: 1 }}
    >
      {filters.map((filter) => (
        <FilterChip
          key={filter.label}
          icon={filter.icon}
          label={filter.label}
          onClick={() => toggleFilter(filter)}
        />
      ))}
      <FiltersDrawer>
        {gameMode === 'multiplayer' ? (
          <MultiplayerFilterForm />
        ) : (
          <BattleRoyalFilterForm />
        )}
      </FiltersDrawer>
    </Stack>
  );
}
