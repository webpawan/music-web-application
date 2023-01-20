import React from 'react'
import Body from './components/body/Body'
import Header from './components/Header/Header'
import Controller from './components/music controler/Controller'
import Sidebar from './components/sidebar/Sidebar'

const App = () => {
  return (
    <>
    <div className="grid">
        <Header/>
        <Sidebar/>
        <Body/>
        <Controller/>
    </div>
    </>
  )
}

export default App