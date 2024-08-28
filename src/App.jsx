// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './services/theme/theme';
import { GlobalStyles } from './services/theme/global';
import './App.css';

import Index from './pages';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Index themeToggler={themeToggler}/>
      </>
    </ThemeProvider>
  );
}

export default App;
