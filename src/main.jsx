import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import FontProvider from '@/app/providers/font-provider.jsx';
import RTLProvider from '@/app/providers/rtl-provider.jsx';
import MUIThemeProvider from '@/app/providers/mui-theme-provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FontProvider>
      <RTLProvider>
        <MUIThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MUIThemeProvider>
      </RTLProvider>
    </FontProvider>
  </StrictMode>,
);
