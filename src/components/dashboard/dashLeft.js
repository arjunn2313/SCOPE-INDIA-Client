import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { api } from "../../api";

export default function DashLeft() {
  const token = useSelector((state) => state.student.credentials);
  const [user,setUser] = useState({})

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

  const handleUpload = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();

    const handleChange = async () => {
      fileInput.removeEventListener("change", handleChange);

      const image = fileInput.files[0];
      console.log(image);

      if (image) {
        const imageData = new FormData();
        imageData.append("image", image);

        try {
          const update = await axios.post(
            `${api}/student/updateimage`,
            imageData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Image updated successfully:");
        } catch (error) {
          console.error("Error updating image:", error);
        }
      }
    };

    fileInput.addEventListener("change", handleChange);
  };

  return (
    <div className="side-bar">
      <div className="sidebar-1">
        <img
          src={`${api}${user.image}`}
          style={{ width: "100px", height: "100px" }}
        />
        <h4>
          {user.firstName} {user.lastName}
        </h4>
        <p>Student</p>
        <div className="dash-img-btn">
          <button onClick={handleUpload}>Update image</button>
        </div>
      </div>

      <div className="sidebar-2">
        <h6>Course instructors</h6>
        <img src="assets\Frame 48.png" />
      </div>

      <div className="sidebar-2">
        <h6>Daily notice</h6>
        <div className="notice-div">
          <span>Prelim payment due</span>
          <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <span>Exam schedule</span>
          <p>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
    </div>
  );
}
