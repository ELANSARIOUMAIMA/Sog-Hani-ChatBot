import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'

import SignUp from './components/SignUp.jsx'

import Dashboard from './pages/Dashboard.jsx'
import Insurance from './pages/Insurance.jsx'
import TrafficCode from './pages/TrafficCode.jsx'
import Profile from './pages/Profile.jsx'




const App = () => {
 
  return (
    <>
    
      <BrowserRouter> 
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard-insurance' element={<Insurance/>}/>
          <Route path='/dashboard-trafic-code' element={<TrafficCode/>}/>
          <Route path='/dashboard-profile' element={<Profile/>}/>

        </Routes>
        
      </BrowserRouter>
     
      </>
   
  )
}

export default App
