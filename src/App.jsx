import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import UserDetail from './components/UserDetail'

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/userdetail/:id' element={<UserDetail />}/>
      </Routes>
    </>
  )
}

export default App
