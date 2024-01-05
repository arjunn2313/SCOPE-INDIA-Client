import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ProfileUpdate(props) {
  const token = useSelector((state) => state.student.credentials);
//  console.log(user)
 const [user,setUser] = useState(props.details)
//  console.log(user)

  const handleSubmit = (e) =>{
        e.preventDefault()

      axios.post('http://localhost:6060/student/updateprofile',user,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then(()=>{
        console.log('updated')
      }).catch((err)=>{
        console.log(err)
      })
  }
  return (
    <div className="dash-home">
      <h5>PROFILE UPDATE</h5>

      <form onSubmit={handleSubmit}>
        <div className="updateform">
          <div style={{ width: "40%" }}>
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.firstName}
              onChange={(e)=>setUser({...user,firstName:e.target.value})}
            />
          </div>

          <div style={{ width: "40%" }}>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.lastName}
              onChange={(e)=>setUser({...user,lastName:e.target.value})}
            />
          </div>
        </div>

        <div className="updateform">
          <div style={{ width: "40%" }}>
            <label>Email</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              placeholder={user.email}
              disabled
            />
          </div>

          <div style={{ width: "40%" }}>
            <label>Phone</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              placeholder={user.phone}
              value={user.phone}
              onChange={(e)=>setUser({...user,phone:e.target.value})}
            />
          </div>
        </div>

        <div className="updateform">
          <div style={{ width: "40%" }}>
            <label>Gender</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.gender}
              onChange={(e)=>setUser({...user,gender:e.target.value})}
            />
          </div>

          <div style={{ width: "40%" }}>
            <label>Country</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.country}
              onChange={(e)=>setUser({...user,country:e.target.value})}
            />
          </div>
        </div>

        <div className="updateform">
          <div style={{ width: "40%" }}>
            <label>State</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.state}
              onChange={(e)=>setUser({...user,state:e.target.value})}
            />
          </div>

          <div style={{ width: "40%" }}>
            <label>City</label>
            <br />
            <input
              type="text"
              className="updateform-input"
              value={user.city}
              onChange={(e)=>setUser({...user,city:e.target.value})}
            />
          </div>
        </div>

        <div className="updateform">
          <button type="submit" className="updateform-button">
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}
