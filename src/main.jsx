import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import FontProvider from '@/app/providers/font-provider.jsx';
import RTLProvider from '@/app/providers/rtl-provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from './theme';
import { ThemeProvider } from '@mui/material';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <FontProvider>
    <RTLProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </RTLProvider>
  </FontProvider>,
);
