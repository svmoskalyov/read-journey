import { Navigate, Route, Routes } from 'react-router'
import Layout from './layouts/Layout.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import Welcome from './pages/Welcome/Welcome.jsx'
import Recommended from './pages/Recommended/Recommended.jsx'
import Library from './pages/Library/Library.jsx'
import Reading from './pages/Reading/Reading.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recommended" element={<Recommended />} />
        <Route path="library" element={<Library />} />
        <Route path="reading" element={<Reading />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
