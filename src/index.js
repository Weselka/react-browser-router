//VAR 1
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'modern-normalize';
// import { Global, ThemeProvider } from '@emotion/react';
// import { App } from './components/App';
// import { GlobalStyles, theme } from 'styles';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ThemeProvider theme={theme}>
//         <Global styles={GlobalStyles} />
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
//-----------------------------------------------------------
//VAR 2
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { App } from 'components/App';
// import 'modern-normalize';
// import './styles/index';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
//-----------------------------------------------------------

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
// import { App } from 'components/App';
import { App } from 'components';
import 'modern-normalize';
import './styles/index';
import { theme } from 'styles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
