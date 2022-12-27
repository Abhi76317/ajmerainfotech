import './App.css';
import React, { useState, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import ShowUser from './page/ShowUser';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
  },
});

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={5}>
        <Navbar mode={mode} setMode={setMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowUser />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
