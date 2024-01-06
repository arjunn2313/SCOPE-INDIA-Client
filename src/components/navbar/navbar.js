import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
 

export default function Navbar() {
  const location = useLocation()
  const [user,setUser] = useState({})

  const token = useSelector((state)=>state.student.credentials)
 console.log(token)

  return (
    <div className={location.pathname =='/login'? 'lognav' : "navbar"}>
        <span>Scope India
        <img src='assets\scope-india-logo-bird.png' alt='logo' />
        </span>
       
        
            <ul>
                <li>
                  <Link to='/' style={{textDecoration:'none',color:'inherit'}}>Home</Link></li>
                <li>
                  <Link to='/about'  style={{textDecoration:'none',color:'inherit'}}>About</Link>
                  </li>
                <li>
                  <Link to='/contact'  style={{textDecoration:'none',color:'inherit'}}>Contact</Link></li>
                  {token ? 
                  <>
                
                  <li>
                  <Link to='/dashboard' style={{textDecoration:'none',color:'inherit'}}>Profile</Link>
                  </li>
                 
                  </>
                :
                <>
                <li>
                  <Link to='/login'>
                    <button className='navbtn sigin'>SIGIN IN</button>
                    </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <button className='navbtn register'>REGISTER</button>
                    </Link>
                </li></>}
            </ul>
            {/* <img src={`http://localhost:6060${user.image}`} style={{border:'',borderRadius:'50%',width:'600px',height:'100px'}}/> */}
         
    </div>
  )
}
