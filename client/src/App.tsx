import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages'
import Login from './pages/login'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </HashRouter>
  )
}

export default App
