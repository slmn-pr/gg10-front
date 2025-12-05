import { Checkbox, FormControlLabel, Grid, Stack, Switch } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

export default function BattleRoyalFilterForm() {
  const { control } = useFormContext();

  return (
    <form dir="rtl">
      <Stack spacing={5}>
        {/* Firts row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="solo"
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
                  label="سولو"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="double"
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
                  label="دابل"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="trios"
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
                  label="تریو"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="squad"
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
                  label="اسکوادی"
                />
              )}
            />
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="killie"
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
                  label="کیلی"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="ranked"
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
                  label="جایگاهی   "
                />
              )}
            />
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="tagie"
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
                  label="تگی"
                />
              )}
            />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <Controller
              name="autoRevive"
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
                  label="اتو ریوایو   "
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
