import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Route = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}/>
    </Routes>
  )
}

export default Route



