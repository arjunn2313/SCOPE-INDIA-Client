import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { api } from '../../api'

export default function DashHome(token) {
  // console.log(token)
  const[pickedCourse,setPickedCourse] = useState([])

  useEffect(()=>{
      axios.get(`${api}/student/pickedcourse`,{
        headers :{
        Authorization : `Bearer ${token.token}`
        }
      }).then((res)=>{
        // console.log(res.data.result)
        setPickedCourse(res.data.result)
      }).catch((error)=>{
        console.log(error)
      })
  },[])
  

  return (
    <div className='dash-home'>
      <h5>Enrolled courses</h5>
      {/* <span>Nothing to show</span> */}
      
      {pickedCourse.map((course)=>(
          <div className="course-table" >
          <div className="course-con">
            <img
              src={`${api}${course.image}`}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="course-con">
            <h6>COURSE NAME</h6>
            <span>{course.course}</span>
            <h6>DURATION</h6>
            <span>{course.duration}</span>

            <h6>FEE</h6>
            <span>{course.fees} RS</span>
          </div>
          <div className="course-con">
            <h6>Course content</h6>
            <p>{course.content}</p>
            {/* <div>
              <button style={{ border: "none", padding: "10px" }}>
                SIGIN IN
              </button>
            </div> */}
          </div>
        </div>
      ))}

    </div>
  )
}
