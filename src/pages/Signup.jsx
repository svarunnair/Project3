import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {


    const[email,setEmail]=useState('')
    const[loading,setLoading]=useState(false)
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
        setLoading(true)
        axios({
            url:"https://reqres.in/api/register",
            method:"POST",
            data:{
            email: email,
            password: password
            }
          })
          .then((res)=>{
            setLoading(false)
            setData(res.data)
            console.log(res.data)
           navigate('/sign')
           
          })
          
          
          .catch((error)=>{
            setError(error)
            setLoading(false)
          })
    }

    const handleClick=()=>{
        navigate("/signin")
    }



  return (
    <div>
        <h1>Sign Up</h1>
       {loading&&<h1>Loading</h1>}
        <input onChange={handleEmail} placeholder='Email id'/><br/>
        <input onChange={handlePassword}placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Sign Up</button>
        <h6 onClick={handleClick}>For sign in</h6>
        




    </div>
  )
}

export default Signup