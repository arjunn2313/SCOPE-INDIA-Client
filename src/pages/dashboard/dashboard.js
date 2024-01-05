import React, { useEffect, useState } from "react";
import DashLeft from "../../components/dashboard/dashLeft";
import "./dashboard.css";
import DashExplore from "../../components/dashboard/daashExplore";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Dashboard() {
  const token = useSelector((state) => state.student.credentials);
  // console.log(token)
  const [user, setUser] = useState({});
  // console.log(user)
  useEffect(() => {
    axios
      .get("http://localhost:6060/student/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data)
        setUser(res.data.data);
      });
  }, [token]);

  return (
    <div className="dashboard">
      <div style={{ width: "20%" }}>
        <DashLeft details={user} />
      </div>
      <div style={{ width: "80%" }}>
        <DashExplore details={user} />
      </div>
    </div>
  );
}
