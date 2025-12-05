import { Checkbox, FormControlLabel, Grid, Stack, Switch } from '@mui/material';

export default function MultiplayerFilterForm() {
  return (
    <form dir="rtl">
      <Stack spacing={5}>
        {/* Firts row */}
        <Grid container spacing={2}>
          <Grid item size={{ sm: 6 }}>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="سرچ اند دیستروی"
            />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="هاردپوینت" />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="فری فور آل" />
          </Grid>
          <Grid item size={{ sm: 6 }}>
            <FormControlLabel control={<Checkbox color="primary" />} label="دوئل" />
          </Grid>
        </Grid>

  

        {/* Switchs */}
        <Stack spacing={3}>
          {/* free lobby */}
          <FormControlLabel control={<Switch sx={{}} />} label="مشاهده لابی های رایگان" />

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
