import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom';

import './styles/base/main.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
