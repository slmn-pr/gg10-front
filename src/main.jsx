import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.jsx';
import FontProvider from '@/app/providers/font-provider.jsx';
import RTLProvider from '@/app/providers/rtl-provider.jsx';
import MUIThemeProvider from '@/app/providers/mui-theme-provider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <FontProvider>
    <RTLProvider>
      <MUIThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </MUIThemeProvider>
    </RTLProvider>
  </FontProvider>,
);
