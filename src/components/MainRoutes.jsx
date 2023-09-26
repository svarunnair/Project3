import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import HomePage from '../pages/HomePage'

function MainRoutes() {
  let token = localStorage.getItem('Token');
  return (
    <div>

        <Routes>

            <Route path="/"element={<Signup/>}/>
            <Route path='/signup'element={<Signup/>}/>
            <Route path='/signin'element={<Signin/>}/>
            <Route path='/home'element={token && <HomePage/>}/>
            <Route path="*"element={<h1>page not found</h1>}/>
            
        </Routes>
    </div>
  )
}

export default MainRoutes