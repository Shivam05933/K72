import React, { createContext,useState,useEffect } from 'react'
export const NavBarContext = createContext()
export const NavBarColorContext = createContext()
import { useLocation } from 'react-router-dom'


const NavContext = ({children}) => {
    
    const [navColor, setNavColor] = useState ('white')
    const [navOpen, setnavOpen] = useState(false)

    const locate = useLocation().pathname
    useEffect(function(){
    if(locate.startsWith('/Agence')  || locate.startsWith('/Project')){
      setNavColor('black')
    }else{
      setNavColor('white')
    }  
    },[locate])
    

  return (
    <div>
      <NavBarContext.Provider value={[navOpen, setnavOpen]} >
          <NavBarColorContext.Provider value={[navColor, setNavColor]} >
              {children}
          </NavBarColorContext.Provider>
      </NavBarContext.Provider>
       
    </div>
  )
}

export default NavContext 