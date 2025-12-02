import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import md3Theme from '@/styles/theme';

const MUIThemeProvider = ({ children }) => (
  <ThemeProvider theme={md3Theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MUIThemeProvider;
