// import React from 'react'

import Dashboard from "./components/Dashboard"
import ProfileActivity from "./components/ProfileActivity"
import Sidebar from "./components/Sidebar"
import "./App.css"


const App = () => {
  return (
    <div  className="flex">
      <Sidebar/>
      <Dashboard />
     
      <ProfileActivity/>
    </div>
  )
}

export default App