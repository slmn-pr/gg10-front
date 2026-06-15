import '@mui/material/styles';
import '@mui/material/Typography';
import type { CSSProperties } from 'react';
import { CUSTOM_PALLETE } from './custom-pallete';

type CustomPalette = typeof CUSTOM_PALLETE;

declare module '@mui/material/styles' {
  interface Palette {
    custom: CustomPalette;

    stroke: {
      primary: string;
      black: string;
      progressbar: string;
      bottomNavigationGreyLine: string;
    };
  }

  interface PaletteOptions {
    custom?: Partial<CustomPalette>;

    stroke?: {
      primary?: string;
      black?: string;
      progressbar?: string;
      bottomNavigationGreyLine?: string;
    };
  }

  interface TypographyVariants {
    title1: CSSProperties;
    title2: CSSProperties;
    title3: CSSProperties;

    sub1: CSSProperties;
    sub2: CSSProperties;
    sub3: CSSProperties;

    button1: CSSProperties;
    button2: CSSProperties;

    body3: CSSProperties;

    caption1: CSSProperties;
    caption2: CSSProperties;

    eng_numbers_bold: CSSProperties;
    eng_numbers_regular: CSSProperties;
  }

  interface TypographyVariantsOptions {
    title1?: CSSProperties;
    title2?: CSSProperties;
    title3?: CSSProperties;

    sub1?: CSSProperties;
    sub2?: CSSProperties;
    sub3?: CSSProperties;

    button1?: CSSProperties;
    button2?: CSSProperties;

    body3?: CSSProperties;

    caption1?: CSSProperties;
    caption2?: CSSProperties;

    eng_numbers_bold?: CSSProperties;
    eng_numbers_regular?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;

    sub1: true;
    sub2: true;
    sub3: true;

    button1: true;
    button2: true;

    body3: true;

    caption1: true;
    caption2: true;

    eng_numbers_bold: true;
    eng_numbers_regular: true;
  }
}
