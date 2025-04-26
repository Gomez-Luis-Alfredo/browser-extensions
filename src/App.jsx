import { useEffect, useState } from "react"
import Browser from "./Browser"


function App() {
  const [darkMode, setDarkMode]= useState(false)
  useEffect(()=>{
    let saveMode = localStorage.getItem('displayMode')
    if(!saveMode){
      saveMode = 'light'
      setDarkMode(false)
      localStorage.setItem('displayMode',saveMode)      
    }setDarkMode( saveMode === 'dark' ? true : false)
  },[])

  const toogleDisplayMode = () =>{
    setDarkMode(!darkMode)
  
  }
  
  return (
    <>
    <div className={`${darkMode ? 'dark' : '' }`}>
      <Browser toogleDisplayMode={toogleDisplayMode} darkMode={darkMode}/>
    </div>
      
    </>
  )
}

export default App
