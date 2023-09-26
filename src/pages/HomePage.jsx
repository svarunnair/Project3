import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate=useNavigate()   
    const handleLogout=()=>{
        navigate("/signin")
    }
  return (
    <div><h1>Welcome to Home Page</h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HomePage