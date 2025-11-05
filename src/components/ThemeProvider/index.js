// src/components/ThemeProvider.js
'use client';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#006bff' },
    background: { default: '#f8f9fa' },
  },
  typography: {
    fontFamily: '"Roboto", "Inter", sans-serif',
  },
});

export default function AppThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}