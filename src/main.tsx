import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/tokens.css'
import './styles/animations.css'
import './styles/global.css'
import './styles/sections.css'
import './styles/layout-dense.css'
import './styles/pages.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
