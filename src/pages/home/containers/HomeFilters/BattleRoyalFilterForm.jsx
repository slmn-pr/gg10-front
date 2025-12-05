import { Checkbox, FormControlLabel, Grid, Stack, Switch } from '@mui/material';

export default function BattleRoyalFilterForm() {
  return (
    <form dir="rtl">
      <Stack spacing={5}>
        {/* Firts row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="سولو" />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="دابل" />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="تریو" />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="اسکوادی" />
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="کیلی" />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="جایگاهی   " />
          </Grid>
        </Grid>

        {/* Second row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="تگی" />
          </Grid>
          <Grid item size={{ sm: 3 }}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="اتو ریوایو   "
            />
          </Grid>
        </Grid>

        {/* Switchs */}
        <Stack spacing={3}>
          {/* free lobby */}
          <FormControlLabel
            control={<Switch sx={{  }} />}
            label="مشاهده لابی های رایگان"
          />

          {/* rank only lobby */}
          <FormControlLabel
            control={<Switch sx={{ marginBlockEnd: 1 }} />}
            label="مشاهده لابی های با رنک مجاز من"
          />
        </Stack>
      </Stack>
    </form>
  );
}
