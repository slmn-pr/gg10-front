import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { MDAvatar, MDCard, MDBadge } from '@/components/ui';

const PlayerIdentityCard = () => (
  <MDCard sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
    <MDAvatar size={72} src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=120&h=120&q=80">
      AG
    </MDAvatar>
    <Stack spacing={1} flexGrow={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="titleLarge">amir_gamer</Typography>
        <MDBadge tone="success" label="Level 42" />
      </Stack>
      <Typography variant="bodySmall" color="text.secondary">
        Royale Panel · 1.5M XP
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Diamond III" size="small" color="primary" />
        <Chip label="Squad Captain" size="small" variant="outlined" />
      </Stack>
    </Stack>
  </MDCard>
);

export default PlayerIdentityCard;
