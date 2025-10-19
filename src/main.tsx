import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppTheme from './AppTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <AppTheme /> {/* 🌗 Active le dark/light mode global */}
    <App />
  </StrictMode>,
)
