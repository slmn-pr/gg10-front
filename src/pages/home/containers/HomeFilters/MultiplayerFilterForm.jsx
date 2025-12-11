import { Checkbox, FormControlLabel, Grid, Stack, Switch } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export default function MultiplayerFilterForm() {
  const { control } = useFormContext();

  return (
    <form dir="rtl">
      <Stack spacing={5}>
        {/* Firts row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 6 }}>
            <Controller
              name="searchAndDistro"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={'سرچ اند دیستروی'}
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <Controller
              name="hardpoint"
              control={control}
              render={({ field }) => (
                <FormControlLabel control={<Checkbox {...field} />} label="هاردپوینت" />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <Controller
              name="freeForAll"
              control={control}
              render={({ field }) => (
                <FormControlLabel
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
                  label="فری فور آل"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <Controller
              name="duo"
              control={control}
              render={({ field }) => (
                <FormControlLabel
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
                  label="دوئل"
                />
              )}
            />
          </Grid>
        </Grid>

        {/* Switchs */}
        <Stack spacing={3}>
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
                label="مشاهده لابی های رایگان"
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
                label="مشاهده لابی های با رنک مجاز من"
              />
            )}
          />
        </Stack>
      </Stack>
    </form>
  );
}
