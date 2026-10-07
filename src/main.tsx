import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './components/Title/Title.tsx'
import Present from './components/Present/Present.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Title />
    <Present />
  </StrictMode>,
)
