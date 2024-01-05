import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './login.css'
import Navbar from "../../components/navbar/navbar";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';


export default function Login() {
  const[loginDetails,setLoginDetails] = useState({
    email :'',
    password :''
  })
  const [errors,setErrors] = useState({
    email :'',
    password:'',
  })
 const [message,setMessage] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
console.log(loginDetails)

const handleSubmit =(e)=>{
  e.preventDefault()
  const error = {}

  if(!loginDetails.email){
    error.email = "Please enter your email"
  }

  if(!loginDetails.password){
    error.password = "Please enter your password"
  }

  if(Object.keys(error).length > 0){
    setErrors(error)
  }else{
    axios.post(`${api}/student/login`,loginDetails).then((res)=>{
    console.log(res.data)
    dispatch(login(res.data.token))
    // setLoginDetails({
    //   email:'',
    //   password:''
    // })
    navigate('/dashboard')
    }).catch((error)=>{
      console.log(error)
    })
  }

}

const forgotpass = () =>{
  const error = {}
  if(!loginDetails.email){
    error.email = 'Please enter your email registered email address'
  }

  if(Object.keys(error).length > 0){
    setErrors(error)
  }else{
    axios.post(`${api}/student/forgotpassword`,loginDetails).then((res)=>{
       setMessage('Please check your mail we have sent a login link with temporary password')
    }).catch((err)=>{
       console.log(err)
       setMessage('user not found')
    })
  }
}

  return (
    <div className='login'>
      <Navbar/>
      <div className='login-container'>
          <h5>SIGN IN</h5>
        {message && message}
          <div className='login-input-container'>
          <form onSubmit={handleSubmit}>
            <div className='login-input'>
            <label>Email</label><br/>
            <input type='email'
            value={loginDetails.email}
            onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})}
            /> 
            {errors.email && <span>{errors.email}</span>}
            </div>

            <div className='login-input'>
            <label>Password</label><br/>
            <input type='password' 
            value={loginDetails.password}
            onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}
            />
            {errors.password && <span>{errors.password}</span>}
            </div>
            <span style={{color:'blue',cursor:'pointer'}}
            onClick={forgotpass}
            >forgot password?</span>

            <div className='login-button'>
            <button type='submit'>Login</button>
            </div>

            

          </form>
          </div>
      </div>
      <div></div>
    </div>
  )
}
