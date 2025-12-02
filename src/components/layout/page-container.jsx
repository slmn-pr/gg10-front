import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const PageContainer = ({ children, maxWidth = 'lg', withBottomNav = false, bottomSlot }) => (
  <Container maxWidth={maxWidth} sx={{ py: 3 }}>
    <Stack spacing={3} pb={withBottomNav ? 8 : 0}>
      {children}
    </Stack>
    {bottomSlot}
  </Container>
);

export default PageContainer;
