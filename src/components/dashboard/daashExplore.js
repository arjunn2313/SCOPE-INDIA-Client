import React, { useEffect, useState } from 'react'
import './dashboard.css'
import DashHome from './dashHome'
import DashCourses from './dashCourses'
import ProfileUpdate from './dashProfileChange'
import PassReset from './passReset'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { logout } from '../../redux/reducer'
import { api } from '../../api'



export default function DashExplore() {
  

  const[direction,setDirection] = useState('dash')
  const navigate = useNavigate()
  const token = useSelector((state)=>state.student.credentials)
  const [user,setUser] = useState({})
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get(`${api}/student/profile`,{
      headers:{
        Authorization : `Bearer ${token}` 
      }
    }).then((res)=>{
      setUser(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className='dashboard-explore'>
        
        <div className='dash-nav'>
          <ul>
            <li onClick={()=>setDirection('dash')} className={direction=='dash' && 'listyle'}>Dash-Board</li>
            <li onClick={()=>setDirection('course')} className={direction=='course' && 'listyle'}>Courses</li>
            <li onClick={()=>setDirection('update')} className={direction=='update' && 'listyle'}>Update Profile</li>
            <li onClick={()=>setDirection('change')} className={direction=='change' && 'listyle'}>Change Password</li>
            <li onClick={()=>navigate('/')}>back home</li>
            <li style={{color:'red'}}
            onClick={()=>dispatch(logout(''))}
            >logout</li>
          </ul>

          <div className='welcome-containor'>

            <div className='welcome-title'>
              <h3>Welcome back, {user.firstName}!</h3>
              <h6>Always stay updated in your student portal</h6>
            </div>

               <div>
            <img src='assets\Scholarcap scroll.png' 
            className='scholar-img'
            />
              <img src='assets\5. College Student.png' 
              className='coll-student'
            />
            </div>

          </div>
        </div>
  
        {direction == 'dash' && <DashHome  token={token}/>}
        {direction == 'course' && <DashCourses token={token}  details={user} />}
        {direction == 'update' && <ProfileUpdate  details={user}/>}
        {direction == 'change' && <PassReset token={token}/>}
       
       
    </div>
  )
}
