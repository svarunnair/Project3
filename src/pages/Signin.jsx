import axios from 'axios';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';


function Signin() {

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState('')
    const[data,setData]=useState([])
    const[error,setError]=useState([])
    const navigate=useNavigate()


    const handleEmail=(e)=>{
        let value=e.target.value
        setEmail(value)
    }
    const handlePassword=(e)=>{
        let value=e.target.value
        setPassword(value)
    }
    const handleSubmit=()=>{

      axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data:{
        email: email,
        password: password
        }
      })
      .then((res)=>{
        setData(res.data)
        if(res.data.token){
            localStorage.setItem('Token', res.data.token);
            navigate("/home")
        }
       
      })
      .catch((error)=>{
        setError(error)
      })
    }
    const handleClick=()=>{
        navigate("/signup")
    }


    console.log(data,'data')



    

  return (
    <div>
      <h1>Sign In</h1>

        <input onChange={handleEmail} placeholder='Email'/><br/>
        <input onChange={handlePassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Sign In</button>
        <h6 onClick={handleClick}>For sign up</h6>


    </div>
  )
}

export default Signin