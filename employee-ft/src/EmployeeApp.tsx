import React from 'react';
import { Button, PaletteOptions, createTheme } from '@mui/material';

function EmployeeApp() {
  const theme = createTheme({
    palette: {
        primary: {
            main: '#A22B2A',
        },
        secondary: {
            main: '#D9D9D6',
        },
        info: {
            main: '#2DBEC2'
        },
        error: {
            main: '#852E2C'
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
    <Button size="large" color="primary" variant="contained">
      Click Me
    </Button>
  );
}

export default EmployeeApp;
