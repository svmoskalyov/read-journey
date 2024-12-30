import { Navigate, Route, Routes } from 'react-router'
import AuthLayout from '@/layouts/AuthLayout.jsx'
import AuthPage from '@/pages/AuthPage.jsx'
import LoginPage from '@/pages/LoginPage.jsx'
import RegisterPage from '@/pages/RegisterPage.jsx'
import MainLayout from '@/layouts/MainLayout.jsx'
import WelcomePage from '@/pages/WelcomePage.jsx'
import RecommendedPage from '@/pages/RecommendedPage.jsx'
import MyLibraryPage from '@/pages/MyLibraryPage.jsx'
import ReadingPage from '@/pages/ReadingPage.jsx'

function App() {
  const isAuth = false
  // const isAuth = true

  return (
    <Routes>
      {!isAuth ? (
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      ) : (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
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
