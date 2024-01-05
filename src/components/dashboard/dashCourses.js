import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { api } from "../../api";

export default function DashCourses(props) {
  const [course, setCourse] = useState([]);
  // console.log(course);
  const[search,setSearch] = useState('')
  // console.log(props.details.courseid)
  const courseid = props.details.courseid
  useEffect(() => {
    axios
      .get(`${api}/course`)
      .then((res) => {
        // console.log(res.data.result);
        setCourse(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const filteredCourses = course.filter((course) =>
  course.course.toLowerCase().includes(search.toLowerCase())
);

const handleSignin = async (id) => {
  try {
    // Assuming 'token' is defined and has a 'token' property
    const authorizationHeader = `Bearer ${props.token}`;

    const connect = await axios.post(`${api}/student/pickedcourse/${id}`, {}, {
      headers: {
        Authorization: authorizationHeader,
      },
    });

    console.log(connect.data);
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="dash-home">
      <h5>OUR COURSES</h5>

      <div className="course-search">
        <input type="search" 
        placeholder="search course"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <IoIosSearch
          style={{
            fontSize: "22px",
            textAlign: "center",
            marginLeft: "1%",
            color: "gray",
          }}
        /> 
          
      </div>
      
      {course &&
        filteredCourses.map((course,i) => (
          <div className="course-table" key={course._id}>
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
              <div>
                <button style={{ border: "none", padding: "10px" }} 
                onClick={()=>handleSignin(course._id)} disabled={courseid.length > 0}>
                  SIGIN IN
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
