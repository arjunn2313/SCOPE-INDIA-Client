import React, { useState } from 'react'
import './dashboard.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/reducer'
 
export default function PassReset(token) {
  const[input,setInput] = useState({
    currentpassword : '',
    newpassword : ''
  })

  const[errors,setErrors] = useState({
    currentpassword : '',
    newpassword : ''
  })

  const dispatch = useDispatch()

 
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    const error = {}

    if(!input.currentpassword){
      error.currentpassword = 'Please enter your password'
    }

    if(!input.newpassword){
      error.newpassword = 'Please enter your new-password'
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(input.newpassword)){
      error.newpassword = 'required minimum eight characters, at least one letter and one number'
    }

    if(Object.keys(error).length > 0){
      setErrors(error)
    }else{
      axios.post('http://localhost:6060/student/updatepassword',input,{
        headers:{
          Authorization:`Bearer ${token.token}`
        }
      }).then((res)=>{
        if(res.data.status){
          dispatch(logout(''))
        }else{
          console.log(res.data.message)
          error.currentpassword = res.data.message
          setErrors(error)
        }  
      }).catch((err)=>{
        console.log(err.message)
       
      })
    }
    
  }
  return (
    <div className='dash-home'>
        <h5>CHANGE PASSWORD</h5>
        <div style={{width:'50%',margin:'auto'}}>

          <form onSubmit={handleSubmit}>
            <div className='reset-input'>
            <label>Current Password</label><br/>
            <input type='password'
            value={input.email}
            placeholder='enter your current password'
            onChange={(e)=>setInput({...input,currentpassword:e.target.value})}
            />
            {errors.currentpassword && <span style={{color:'red'}}>{errors.currentpassword}</span>}
            </div>

            <div className='reset-input'>
            <label>New Password</label><br/>
            <input type='password' 
             placeholder='enter your new password'
            value={input.password}
            onChange={(e)=>setInput({...input,newpassword:e.target.value})}
            />
            {errors.newpassword && <span style={{color:'red'}}>{errors.newpassword}</span>}
            </div>

             
            

            <div className='login-button'>
            <button type='submit' style={{backgroundColor:'green'}}>Update</button>
            </div>

          </form>
          </div>
        
    </div>
  )
}
