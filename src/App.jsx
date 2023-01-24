import React from 'react'
import Main from './components/pages/Main'
import Sidebar from './components/sideBar/Sidebar'

const App = () => {
  return (
    <>
    <div className="body__container">
      
    <div className="container">
    <Sidebar/>
    <Main/>
    </div>
    </div>
    </>
  )
}

export default App