import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet, useNavigate } from 'react-router-dom';
import mainTheme from '@/theme/index.js';
import { CssBaseline, IconButton, Stack, ThemeProvider, Typography } from '@mui/material';
import OfflineSnakbar from '../OfflineSnakbar';
import ChevronForwardIcon from '../icons/ChevronForward';

interface SimpleLayoutProps {
  title: string;
}

export default function SimpleLayout({ title: defaultTitle }: SimpleLayoutProps) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(defaultTitle);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />

      <Box
        bgcolor="custom.tint0"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Container
          disableGutters
          maxWidth="sm"
          sx={{
            paddingLeft: { xs: 0, md: 1 },
            paddingRight: { xs: 0, md: 1 },
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: mainTheme.palette.custom.primaryBg,
            gap: 0.5,
            pt: 2,
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ direction: 'rtl', mb: '30px' }}
          >
            <IconButton onClick={() => navigate(-1)}>
              <ChevronForwardIcon color="white" />
            </IconButton>
            <Typography variant="h6">{title}</Typography>
          </Stack>

          <OfflineSnakbar />

          <Box component="main" sx={{ flexGrow: 1, pb: 8, px: 0 }}>
            <Outlet context={{ setTitle }} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
