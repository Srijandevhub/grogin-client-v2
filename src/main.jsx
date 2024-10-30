import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/fonts.css'
import './assets/css/style.css'
import './assets/css/container.css'
import './assets/css/flex.css'
import './assets/css/margin.css'
import './assets/css/padding.css'
import './assets/css/typography.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)