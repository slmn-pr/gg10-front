import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MDSectionTitle = ({ title, subtitle, actionSlot }) => (
  <Stack direction="row" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2} justifyContent="space-between" sx={{ mb: 2 }}>
    <Stack spacing={0.5}>
      <Typography variant="titleLarge">{title}</Typography>
      {subtitle ? (
        <Typography variant="bodySmall" color="text.secondary">
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
    {actionSlot}
  </Stack>
);

export default MDSectionTitle;
