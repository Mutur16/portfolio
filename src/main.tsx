import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Portfolio.tsx'
import './main.css'
import './i18n'
import Wix from './Wix.tsx'

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/wix',
    element: <Wix />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
)
