import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Detailpage from '../components/Detailpage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'

const Routess = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detailpage/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
    </Routes>
  )
}

export default Routess;



