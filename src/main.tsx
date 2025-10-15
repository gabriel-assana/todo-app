import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { PostsProvider } from './context/PostsContext';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostsProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
