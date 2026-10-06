import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Title from './components/Title/Title.tsx'
import Challenge from './components/Challenge/Challenge.tsx'
import Letter from './components/Letter/Letter.tsx'
import Media from './components/Media/Media.tsx'
import Present from './components/Present/Present.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Title />
    <Letter />
    <Media />
    <Challenge />
    <Present/>
  </StrictMode>,
)
