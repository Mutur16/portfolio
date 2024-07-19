// Root.tsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const Root: React.FC = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
)

export default Root
