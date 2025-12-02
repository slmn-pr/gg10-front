import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const FilterGroups = ({ groups = [], values = {}, onChange }) => (
  <Stack spacing={2}>
    {groups.map((group) => (
      <Stack key={group.id} spacing={1}>
        {group.label ? (
          <Typography variant="labelMedium" color="text.secondary">
            {group.label}
          </Typography>
        ) : null}
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {group.options.map((option) => {
            const isActive = values[group.id] === option.value;
            if (group.variant === 'segment') {
              return (
                <Button
                  key={option.value}
                  variant={isActive ? 'contained' : 'outlined'}
                  color={isActive ? 'secondary' : 'inherit'}
                  size="small"
                  onClick={() => onChange(group.id, option.value)}
                  sx={{
                    borderRadius: (theme) => theme.shape.custom.medium,
                  }}
                >
                  {option.label}
                </Button>
              );
            }

            return (
              <Chip
                key={option.value}
                label={option.label}
                size="small"
                color={isActive ? 'primary' : 'default'}
                variant={isActive ? 'filled' : 'outlined'}
                onClick={() => onChange(group.id, option.value)}
              />
            );
          })}
        </Stack>
      </Stack>
    ))}
  </Stack>
);

export default FilterGroups;
