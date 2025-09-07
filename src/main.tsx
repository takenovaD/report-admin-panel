import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";  // добавляем
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/report-admin-panel">   {/* 👈 говорим роутеру, что сайт в подпапке */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
