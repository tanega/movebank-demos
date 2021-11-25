import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import theme from '../src/lib/Theme/theme';

export const decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
      <Story />
    </MUIThemeProvider>
  ),
];
