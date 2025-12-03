import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      // Primary shades
      shade1: string;
      shade2: string;
      shade3: string;
      shade4: string;
      // Primary tints
      tint1: string;
      tint2: string;
      tint3: string;
      tint4: string;
      // Primary text colors
      whiteOnPrimary: string;
      blackOnPrimary: string;
      // Main backgrounds
      bg1: string; // Meshki
      bg2: string; // Zoghali
      bg3: string; // White
      // On Background 1 colors
      whiteOnBg1: string;
      greyOnBg1: string;
      // On Background 2 colors
      whiteOnBg2: string;
      greyOnBg2: string;
      disabledGreyOnBg2: string;
      primaryOnBg2: string;
      // Component backgrounds
      modalBg: string;
      progressBarBg: string;
      // State colors
      error: string;
      onError: string;
      info: string;
      onInfo: string;
      success: string;
      onSuccess: string;
      warning: string;
      onWarning: string;
      deleteOnModal: string;
      // Stroke colors
      primaryStroke: string;
      blackStroke: string;
      progressStroke: string;
      bottomNavigationGreyLine: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      // Primary shades
      shade1?: string;
      shade2?: string;
      shade3?: string;
      shade4?: string;
      // Primary tints
      tint1?: string;
      tint2?: string;
      tint3?: string;
      tint4?: string;
      // Primary text colors
      whiteOnPrimary?: string;
      blackOnPrimary?: string;
      // Main backgrounds
      bg1?: string; // Meshki
      bg2?: string; // Zoghali
      bg3?: string; // White
      // On Background 1 colors
      whiteOnBg1?: string;
      greyOnBg1?: string;
      // On Background 2 colors
      whiteOnBg2?: string;
      greyOnBg2?: string;
      disabledGreyOnBg2?: string;
      primaryOnBg2?: string;
      // Component backgrounds
      modalBg?: string;
      progressBarBg?: string;
      // State colors
      error?: string;
      onError?: string;
      info?: string;
      onInfo?: string;
      success?: string;
      onSuccess?: string;
      warning?: string;
      onWarning?: string;
      deleteOnModal?: string;
      // Stroke colors
      primaryStroke?: string;
      blackStroke?: string;
      progressStroke?: string;
      bottomNavigationGreyLine?: string;
    };
  }
}
