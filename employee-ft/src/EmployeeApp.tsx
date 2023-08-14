import { PaletteOptions, ThemeProvider, createTheme } from '@mui/material';
import Layout from './layout/Layout.component';

function EmployeeApp() {
  const theme = createTheme({
    palette: {
        primary: {
            main: '#D85624',
        },
        secondary: {
            main: '#D9D9D6',
        },
        info: {
            main: '#2DBEC2'
        },
        error: {
            main: '#e5110c'
        },
        success: {
            main: '#658D1B'
        },
    } as PaletteOptions,
    typography: {
        fontFamily: 'Helvetica,Arial,San Serif',
        fontSize: 14,
    }
});

  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
}

export default EmployeeApp;
