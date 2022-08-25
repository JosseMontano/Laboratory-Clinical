import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Doctor from './pages/doctor'
import IndexUser from './pages/indexUser'
import Login from './pages/login'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="index" element={<IndexUser />} />
      <Route path="doctor" element={<Doctor />} />
    </Routes>
  </HashRouter>
  )
}

export default App
