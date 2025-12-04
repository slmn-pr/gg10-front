import { Stack, SvgIcon } from '@mui/material';
import FilterChip from './components/FilterChip';
import FilterChipIcon from '@/components/icons/FilterChipIcon';
import KillChipIcon from '@/components/icons/KillChipIcon';
import AutoReviveChipIcon from '@/components/icons/AutoReviveChipIcon';
import SquadChipIcon from '@/components/icons/SquadChipIcon';

const filters = [
  {
    label: 'فیلترها',
    icon: <FilterChipIcon />,
  },
  { label: 'کیلی', icon: <KillChipIcon /> },
  { label: 'اتوریوایو', icon: <AutoReviveChipIcon /> },
  { label: 'اسکوادی', icon: <SquadChipIcon /> },
];

export default function HomeFilters() {
  return (
    <Stack direction="row-reverse" spacing={2} sx={{ mb: 3, overflowX: 'auto', pb: 1 }}>
      {filters.map((filter) => (
        <FilterChip
          key={filter.label}
          icon={filter.icon}
          label={filter.label}
          onClick={() => {}}
        />
      ))}
    </Stack>
  );
}
