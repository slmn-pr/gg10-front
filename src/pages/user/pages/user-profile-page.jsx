import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PageContainer, MDAppBar } from '@/components/layout';
import { MDCard, MDSurfaceContainer, MDAvatar } from '@/components/ui';

const UserProfilePage = () => (
  <PageContainer>
    <MDAppBar title="Player Profile" />
    <MDSurfaceContainer>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center">
        <MDAvatar size={96}>UP</MDAvatar>
        <Stack spacing={1}>
          <Typography variant="headlineSmall">Username Placeholder</Typography>
          <Typography variant="bodySmall" color="text.secondary">
            This area can hold gamer bio, region, clan tags, and quick stats.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="contained">Edit Profile</Button>
            <Button variant="outlined" color="secondary">
              Share
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </MDSurfaceContainer>
    <MDCard>
      <Typography variant="titleMedium">Inventory / badges placeholder</Typography>
      <Typography variant="bodySmall" color="text.secondary">
        Add cards, chips, and badges here later.
      </Typography>
    </MDCard>
  </PageContainer>
);

export default UserProfilePage;
