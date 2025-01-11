import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Toaster } from '@/components/ui/toaster'
import AuthLayout from '@/layouts/AuthLayout.jsx'
import WelcomePage from '@/pages/WelcomePage.jsx'
// import MainLayout from '@/layouts/MainLayout.jsx'
// import RegisterPage from '@/pages/RegisterPage.jsx'
// import LoginPage from '@/pages/LoginPage.jsx'
// import RecommendedPage from '@/pages/RecommendedPage.jsx'
// import MyLibraryPage from '@/pages/MyLibraryPage.jsx'
// import ReadingPage from '@/pages/ReadingPage.jsx'

// import useAuthStore from '@/stores/useAuthStore'

const MainLayout = lazy(() => import('./layouts/MainLayout'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RecommendedPage = lazy(() => import('./pages/RecommendedPage'))
const MyLibraryPage = lazy(() => import('./pages/MyLibraryPage'))
const ReadingPage = lazy(() => import('./pages/ReadingPage'))

function App() {
  // const isAuth = useAuthStore(state => state.isAuth)
  const isAuth = false
  // const isAuth = true

  return (
    <>
      <Routes>
        {!isAuth ? (
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<WelcomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        ) : (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="recommended" replace />} />
            <Route path="recommended" element={<RecommendedPage />} />
            <Route path="library" element={<MyLibraryPage />} />
            <Route path="reading" element={<ReadingPage />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
