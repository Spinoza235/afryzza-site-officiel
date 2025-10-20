import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppTheme from './AppTheme.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <StrictMode>
      <AppTheme /> {/* 🌗 Active le dark/light mode global */}
    <App />
  </StrictMode>,
  </BrowserRouter>
 
)
