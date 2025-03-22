import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom';
import FontStyles from './styles/defaults/fonts.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <FontStyles />
      <App />
    </HashRouter>
  </StrictMode>,
)
