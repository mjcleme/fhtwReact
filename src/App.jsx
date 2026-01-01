import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CallForPapers from './pages/CallForPapers'
import LocalInfo from './pages/LocalInfo'
import Program from './pages/Program'
import Registration from './pages/Registration'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="call-for-papers" element={<CallForPapers />} />
          <Route path="local-info" element={<LocalInfo />} />
          <Route path="program" element={<Program />} />
          <Route path="registration" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
