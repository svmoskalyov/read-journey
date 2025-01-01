import { Navigate, Route, Routes } from 'react-router'
import AuthLayout from '@/layouts/AuthLayout.jsx'
import RegisterPage from '@/pages/RegisterPage.jsx'
import LoginPage from '@/pages/LoginPage.jsx'
import MainLayout from '@/layouts/MainLayout.jsx'
import WelcomePage from '@/pages/WelcomePage.jsx'
import RecommendedPage from '@/pages/RecommendedPage.jsx'
import MyLibraryPage from '@/pages/MyLibraryPage.jsx'
import ReadingPage from '@/pages/ReadingPage.jsx'

import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()

  // const isAuth = false
  const isAuth = true

  const handleAuth = useCallback(() => {
    navigate('/recommended')
  }, [navigate])

  useEffect(() => {
    if (isAuth) {
      handleAuth()
    }
  }, [handleAuth, isAuth])

  return (
    <Routes>
      {!isAuth ? (
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      ) : (
        <Route path="/" element={<MainLayout />}>
          <Route path="recommended" element={<RecommendedPage />} />
          <Route path="library" element={<MyLibraryPage />} />
          <Route path="reading" element={<ReadingPage />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
