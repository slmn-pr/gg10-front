import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTheme } from '@mui/material/styles';

const FIRST_ROW_CHECK_BOXES = [
  {
    name: 'solo',
    label: 'سولو',
  },
  {
    name: 'double',
    label: 'دابل',
  },
  {
    name: 'trios',
    label: 'تریو',
  },
  {
    name: 'squad',
    label: 'اسکوادی',
  },
];

const SECOND_ROW_CHECK_BOXES = [
  {
    name: 'killie',
    label: 'کیلی',
  },
  {
    name: 'ranked',
    label: 'جایگاهی',
  },
];

const THIRD_ROW_CHECK_BOXES = [
  {
    name: 'tagie',
    label: 'تگی',
  },
  {
    name: 'autoRevive',
    label: 'اتو ریوایو',
  },
];

export default function BattleRoyalFilterForm() {
  const { control, watch } = useFormContext();
  const theme = useTheme();

  const formValues = watch();

  return (
    <form dir="rtl">
      <Stack
        spacing="20px"
        sx={{ padding: 0 }}
        divider={
          <Divider
            style={{ marginTop: 0, backgroundColor: theme.palette.custom.blackStroke }}
          />
        }
      >
        {/* Firts row */}
        <Grid container pb="10px">
          {FIRST_ROW_CHECK_BOXES.map((checkbox) => (
            <Grid item size={{ sm: 3 }} key={checkbox.name}>
              <Controller
                name={checkbox.name}
                control={control}
                render={({ field }) => {
                  return (
                    <FormControlLabel
                      sx={{ margin: 0 }}
                      control={
                        <Checkbox
                          name={field.name}
                          inputRef={field.ref}
                          checked={!!field.value}
                          onChange={(_event, checked) => field.onChange(checked)}
                          onBlur={field.onBlur}
                          color="primary"
                        />
                      }
                      label={<Typography variant="sub1">{checkbox.label}</Typography>}
                    />
                  );
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Second row */}
        <Grid container pb="10px">
          {SECOND_ROW_CHECK_BOXES.map((checkbox) => (
            <Grid item size={{ sm: 3 }} key={checkbox.name}>
              <Controller
                name={checkbox.name}
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    control={
                      <Checkbox
                        name={field.name}
                        inputRef={field.ref}
                        checked={!!field.value}
                        onChange={(_event, checked) => field.onChange(checked)}
                        onBlur={field.onBlur}
                        color="primary"
                      />
                    }
                    label={<Typography variant="sub1">{checkbox.label}</Typography>}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>

        {/* Third row */}
        <Grid container pb="10px">
          {THIRD_ROW_CHECK_BOXES.map((checkbox) => (
            <Grid item size={{ sm: 3 }} key={checkbox.name}>
              <Controller
                name={checkbox.name}
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    sx={{ margin: 0 }}
                    control={
                      <Checkbox
                        name={field.name}
                        inputRef={field.ref}
                        checked={!!field.value}
                        onChange={(_event, checked) => field.onChange(checked)}
                        onBlur={field.onBlur}
                        color="primary"
                      />
                    }
                    label={<Typography variant="sub1">{checkbox.label}</Typography>}
                  />
                )}
              />
            </Grid>
          ))}
        </Grid>

        {/* Switchs */}
        <Stack spacing={2}>
          {/* free lobby */}
          <Controller
            name="freeLobby"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Switch
                    name={field.name}
                    inputRef={field.ref}
                    checked={!!field.value}
                    onChange={(_event, checked) => field.onChange(checked)}
                    onBlur={field.onBlur}
                    sx={{}}
                  />
                }
                label={<Typography variant="sub1">مشاهده لابی های رایگان</Typography>}
              />
            )}
          />

          {/* rank only lobby */}
          <Controller
            name="rankOnlyLobby"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Switch
                    name={field.name}
                    inputRef={field.ref}
                    checked={!!field.value}
                    onChange={(_event, checked) => field.onChange(checked)}
                    onBlur={field.onBlur}
                    sx={{ marginBlockEnd: 1 }}
                  />
                }
                label={
                  <Typography variant="sub1">مشاهده لابی های با رنک مجاز من</Typography>
                }
              />
            )}
          />
        </Stack>
      </Stack>
    </form>
  );
}
