import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { PageContainer, MDAppBar, MDDrawer } from '@/components/layout';
import { MDCard, MDSectionTitle, MDChip } from '@/components/ui';

const filters = ['Overview', 'Players', 'Reports'];

const AdminDashboardPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Overview');

  return (
    <PageContainer>
      <MDAppBar
        title="Admin Console"
        actions={<Button onClick={() => setDrawerOpen(true)}>Menu</Button>}
      />
      <MDDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <MDSectionTitle
        title="Quick Filters"
        subtitle="Use chips to jump between management sections"
      />
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {filters.map((filter) => (
          <MDChip
            key={filter}
            label={filter}
            selected={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </Stack>

      <Grid container spacing={2}>
        {[1, 2, 3].map((item) => (
          <Grid item key={item} xs={12} md={4}>
            <MDCard>
              <Typography variant="titleMedium">Widget {item}</Typography>
              <Typography variant="bodySmall" color="text.secondary">
                Placeholder analytics and quick actions.
              </Typography>
            </MDCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default AdminDashboardPage;
