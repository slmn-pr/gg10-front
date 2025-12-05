import { Checkbox, FormControlLabel, Stack, SvgIcon } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';
import FiltersDrawer from './FiltersDrawer';
import { useMemo, useRef } from 'react';
import BattleRoyalFilterForm from './BattleRoyalFilterForm';
import { useSearchParams } from 'react-router-dom';
import MultiplayerFilterForm from './MultiplayerFilterForm';

const filters = [
  { label: 'اسکوادی', icon: <SquadChipIcon /> },
  { label: 'کیلی', icon: <KillChipIcon /> },
  { label: 'اتوریوایو', icon: <AutoReviveChipIcon /> },
];

export default function HomeFilters() {
  const containerElement = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const gameMode = useMemo(
    () => (searchParams.get('gameMode') ? searchParams.get('gameMode') : 'multiplayer'),
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
          onClick={() => {}}
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
