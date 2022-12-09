import React from 'react'
import AppNavBar from './components/AppNavBar'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
      <div className='App'>
          <AppNavBar/>
          <Outlet/>
      </div>
  )
}

export default App
