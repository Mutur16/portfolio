import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio.tsx'
import './main.css'
import './i18n'

const theme = localStorage.getItem('theme')
if (
  theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
  localStorage.setItem('theme', 'dark')
} else {
  localStorage.setItem('theme', 'light')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <Portfolio />
    </React.Suspense>
  </React.StrictMode>
)
