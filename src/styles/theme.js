import { createTheme } from '@mui/material/styles';

const sharedPalette = {
  primary: { main: '#8E7CFF', contrastText: '#0C091C' },
  secondary: { main: '#FF7EDB', contrastText: '#1E0415' },
  error: { main: '#FF6B6B' },
  background: { default: '#0D0F17', paper: '#151826' }, // Updated background
  text: { primary: '#F9F9FF', secondary: '#B0B3C5' },
};

const shapeScale = {
  borderRadius: 18,
  custom: {
    small: 12,
    medium: 18,
    large: 28,
  },
};

const md3Shadows = [
  'none',
  '0px 1px 2px rgba(7, 5, 19, 0.45), 0px 1px 3px rgba(7, 5, 19, 0.35)',
  '0px 2px 4px rgba(7, 5, 19, 0.5), 0px 1px 3px rgba(7, 5, 19, 0.35)',
  '0px 4px 8px rgba(7, 5, 19, 0.55), 0px 2px 4px rgba(7, 5, 19, 0.45)',
  '0px 6px 12px rgba(7, 5, 19, 0.55), 0px 4px 8px rgba(7, 5, 19, 0.35)',
  '0px 8px 16px rgba(7, 5, 19, 0.6), 0px 6px 10px rgba(7, 5, 19, 0.4)',
  '0px 12px 20px rgba(7, 5, 19, 0.65)',
  ...Array(18).fill('none'), // Fill up to 24 shadows
];

const typography = {
  fontFamily: "Estedad-FD",
  displayLarge: { fontSize: '3.5rem', fontWeight: 500, letterSpacing: '-0.02em' },
  displayMedium: { fontSize: '3rem', fontWeight: 500 },
  displaySmall: { fontSize: '2.5rem', fontWeight: 500 },
  headlineLarge: { fontSize: '2.2rem', fontWeight: 600 },
  headlineMedium: { fontSize: '1.9rem', fontWeight: 600 },
  headlineSmall: { fontSize: '1.6rem', fontWeight: 600 },
  titleLarge: { fontSize: '1.3rem', fontWeight: 600 },
  titleMedium: { fontSize: '1.1rem', fontWeight: 600 },
  titleSmall: { fontSize: '1rem', fontWeight: 600 },
  bodyLarge: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
  bodyMedium: { fontSize: '0.95rem', fontWeight: 400, lineHeight: 1.5 },
  bodySmall: { fontSize: '0.85rem', fontWeight: 400, lineHeight: 1.4 },
  labelLarge: { fontSize: '0.95rem', fontWeight: 600 },
  labelMedium: { fontSize: '0.85rem', fontWeight: 600 },
  labelSmall: { fontSize: '0.75rem', fontWeight: 600 },
};

const md3Theme = createTheme({
  palette: {
    mode: 'dark',
    ...sharedPalette,
  },
  // typography,
  shape: shapeScale,
  shadows: md3Shadows,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: shapeScale.borderRadius,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          borderRadius: shapeScale.custom.large,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: shapeScale.custom.medium,
        },
      },
    },
  },
});

export const tokens = {
  palette: { dark: sharedPalette }, // Simplified tokens
  shape: shapeScale,
  elevation: {
    level0: md3Shadows[0],
    level1: md3Shadows[1],
    level2: md3Shadows[2],
    level3: md3Shadows[3],
    level4: md3Shadows[4],
    level5: md3Shadows[5],
  },
};

export default md3Theme;
