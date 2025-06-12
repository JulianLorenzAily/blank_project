import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';

// Simple dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;

