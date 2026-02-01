import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SpecialtyDetail from './pages/SpecialtyDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialty/:slug" element={<SpecialtyDetail />} />
      </Routes>
    </Router>
  )
}

export default App
