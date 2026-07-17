
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import CustomCursor from './components/common/CustomCursor'




function App() {
  return (
    <div className='overflow-x-hidden'>
      <CustomCursor />
      <Navbar />
      <FullScreenNav />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
