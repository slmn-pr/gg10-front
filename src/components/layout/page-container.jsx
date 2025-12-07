import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const PageContainer = ({
  children,
  maxWidth = 'lg',
  withBottomNav = false,
  bottomSlot,
}) => (
  <Container
    maxWidth={maxWidth}
    sx={{
      py: 1,
      px: 0,
      backgroundColor: 'custom.bg1',
      height: 'calc(100vh - 100px)',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',
    }}
  >
    <Stack spacing={3} pb={withBottomNav ? 8 : 0}>
      {children}
    </Stack>
    {bottomSlot}
  </Container>
);

export default PageContainer;
