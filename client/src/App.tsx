import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages'
import IndexUser from './pages/indexUser'
import Login from './pages/login'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="login" element={<Login />} />
      <Route path="index" element={<IndexUser />} />
    </Routes>
  </HashRouter>
  )
}

export default App
