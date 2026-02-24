import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair.jsx'
import NavContext from './components/Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>
        <NavContext >
          <App />
        </NavContext>
      </Stair>
    </BrowserRouter>
  </StrictMode>,
)

// stairs ka child <App /> hai 
// <App/> ko esliye child banaya gaya hai jisse ki jab stairs vala animation run ho jaye uske baad pura app chale 
// <App /> App ko child bana ke stair.jsx me gsap ke through delay kar diya gaya hai 