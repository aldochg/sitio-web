import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema de tu preferencia
import 'primereact/resources/primereact.min.css';                 // Estilos básicos
import 'primeicons/primeicons.css';                              // Iconos
import 'primeflex/primeflex.css';                                // PrimeFlex para diseño


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
