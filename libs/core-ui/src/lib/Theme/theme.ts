import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#07A0C3',
    },
    secondary: {
      main: '#386150',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
