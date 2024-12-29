import { Suspense } from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  )
}

export default MainLayout