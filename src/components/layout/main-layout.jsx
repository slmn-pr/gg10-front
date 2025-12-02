import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TopBar from './top-bar';
import BottomNav from './bottom-navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="sm" sx={{ p: 0, display: 'flex', flexDirection: 'column', flexGrow: 1, overflowX: 'hidden' }}>
        <TopBar />
        <Box component="main" sx={{ flexGrow: 1, pb: 12, px: 2, overflowX: 'hidden' }}>
          <Outlet />
        </Box>
        <BottomNav />
      </Container>
    </Box>
  );
};

export default MainLayout;
