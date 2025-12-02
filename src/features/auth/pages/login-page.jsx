import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { PageContainer } from '@/components/layout';
import { MDSurfaceContainer } from '@/components/ui';

const LoginPage = () => (
  <PageContainer maxWidth="sm">
    <MDSurfaceContainer elevation={3}>
      <Stack spacing={2}>
        <Typography variant="headlineSmall">Welcome Back</Typography>
        <Typography variant="bodySmall" color="text.secondary">
          This placeholder form can be replaced with your auth logic later.
        </Typography>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <Button variant="contained" size="large">
          Sign In
        </Button>
      </Stack>
    </MDSurfaceContainer>
  </PageContainer>
);

export default LoginPage;
