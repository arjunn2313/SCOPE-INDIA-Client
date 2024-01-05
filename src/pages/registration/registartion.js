import React, { useEffect, useState } from "react";
import "./registration.css";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { country, state, cities } from "../../namedExports/coutry";
import Footer from "../../components/footer/footer";
import axios from "axios";
import { api } from "../../api";

export default function Registartion() {
  const navigate = useNavigate();
  const [buttonClick, setButtonClick] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    image: "",
    message: "",
  });

  const [regInput, setRegInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    image: "",
  });

  console.log(regInput);

  const handleChange = (e) => {
    setRegInput({ ...regInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonClick(true);
    const error = {};

    if (!regInput.firstName) {
      error.firstName = "Please enter your first name";
    } else if (!/^[A-Za-z]{3,}$/.test(regInput.firstName)) {
      error.firstName =
        "First name must be at least 3 characters and contain only letters";
    }

    if (!regInput.lastName) {
      error.lastName = "Please enter your last name";
    }

    if (!regInput.email) {
      error.email = "Please enter your first name";
    }

    if (!regInput.phone) {
      error.phone = "Please enter your phone";
    } else if (!/^\d{10}$/.test(regInput.phone)) {
      error.phone =
        "Phone number must be exactly 10 digits and contain only numbers";
    }

    if (!regInput.dob) {
      error.dob = "Please enter your Date of birth";
    }

    if (!regInput.gender) {
      error.gender = "Please select your gender";
    }

    if (!regInput.country) {
      error.country = "Please select your country";
    }

    if (!regInput.state) {
      error.state = "Please select your state";
    }

    if (!regInput.city) {
      error.city = "Please select your city";
    }

    if (!regInput.image) {
      error.image = "Please upload your photo";
    }

    //validation

    if (Object.keys(error).length > 0) {
      setErrors(error);
      setButtonClick(false);
    } else {
      console.log("submitted");
      const formData = new FormData();
      formData.append("firstName", regInput.firstName);
      formData.append("lastName", regInput.lastName);
      formData.append("email", regInput.email);
      formData.append("gender", regInput.gender);
      formData.append("dob", regInput.dob);
      formData.append("phone", regInput.phone);
      formData.append("country", regInput.country);
      formData.append("state", regInput.state);
      formData.append("city", regInput.city);
      formData.append("image", regInput.image);

      await axios
        .post(`${api}/student`, formData)
        .then((res) => {
          console.log(res.data);
          error.message = res.data.message;
          setErrors(error);
          setRegInput({
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            phone: "",
            gender: "",
            country: "",
            state: "",
            city: "",
            image: null,
          });

          setButtonClick(false);
        })
        .catch((err) => {
          console.log(err);
          setButtonClick(false);
        });
    }
  };

  return (
    <div className="registration">
      {/* <Navbar/> */}

      {/* <h1>registration</h1> */}

      <div className="form-container">
        <div className="form-sub-containor">
          <h5>
            Profile Information <span style={{ color: "red" }}>*</span>
          </h5>

          {/* FORM */}

          <form onSubmit={handleSubmit}>
            <div className="input-reg">
              <label htmlFor="firstName">First Name</label>
              <br />
              <input
                type="text"
                name="firstName"
                value={regInput.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="form-error">{errors.firstName}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="lastName">Last Name</label>
              <br />
              <input
                type="text"
                name="lastName"
                value={regInput.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="form-error">{errors.lastName}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={regInput.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                type="tel"
                name="phone"
                value={regInput.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="form-error">{errors.phone}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="dob">DOB</label>
              <br />
              <input
                type="date"
                name="dob"
                value={regInput.dob}
                onChange={handleChange}
              />
              {errors.dob && <span className="form-error">{errors.dob}</span>}
            </div>

            <div className="input-radio">
              <label
                htmlFor="gender"
                style={{ fontSize: "16px", fontWeight: "500" }}
              >
                Gender
              </label>
              <br />
              <input
                type="radio"
                value="male"
                name="gender"
                checked={regInput.gender === "male"}
                onChange={handleChange}
              />

              <label>Male</label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={regInput.gender === "female"}
                onChange={handleChange}
              />

              <label>Female</label>
              <input
                type="radio"
                value="others"
                name="gender"
                id="gender"
                checked={regInput.gender === "others"}
                onChange={handleChange}
              />
              <label>Other</label>
              <br />
              {errors.gender && (
                <span className="form-error">{errors.gender}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="country">Country</label>
              <br />
              <select
                id="country"
                name="country"
                value={regInput.country}
                onChange={handleChange}
              >
                <option>select country</option>
                {country.map((cout, i) => (
                  <option key={i}>{cout}</option>
                ))}
              </select>
              {errors.country && (
                <span className="form-error">{errors.country}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="state">State</label>
              <br />
              <select
                id="state"
                name="state"
                value={regInput.state}
                onChange={handleChange}
              >
                <option>select state</option>
                {regInput.country &&
                  state[regInput.country].map((cout, i) => (
                    <option key={i}>{cout}</option>
                  ))}
              </select>
              {errors.state && (
                <span className="form-error">{errors.state}</span>
              )}
            </div>

            <div className="input-reg">
              <label htmlFor="city">City</label>
              <br />
              <select
                name="city"
                id="city"
                value={regInput.city}
                onChange={handleChange}
              >
                <option>select city</option>
                {regInput.state &&
                  cities[regInput.state].map((city, i) => (
                    <option key={i}>{city}</option>
                  ))}
              </select>
              {errors.city && <span className="form-error">{errors.city}</span>}
            </div>

            <div className="input-re">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  paddingBottom: "1%",
                }}
                htmlFor="image"
              >
                Image
              </label>
              <br />
              <input
                id="image"
                type="file"
                name="image"
                onChange={(e) =>
                  setRegInput({ ...regInput, image: e.target.files[0] })
                }
              />
              <br />
              {errors.image && (
                <span className="form-error">{errors.image}</span>
              )}
              {errors.message && (
                <span style={{ color: "green" }}>{errors.message}</span>
              )}
            </div>

            <div className="reg-button">
              <button
                style={{ backgroundColor: "black", color: "#fff" }}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  border: "1px solid #fff",
                }}
                type="submit"
                disabled={buttonClick}
              >
                {buttonClick ? "Submiting...." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <div style={{ width: "40%" }} className="form-img-form">
          <div className="form-img">
            {/* <h6>It's just a matter of 80 days to an IT job!</h6> */}
            {/* <img src="assets\Finance, e-commerce, startup, workflow _ account, information, user, profile, data.png" /> */}
            <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4917.jpg?size=626&ext=jpg&ga=GA1.1.1123057924.1692027639&semt=sph%27);%20background:%20url(%27https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting_335657-2680.jpg?size=626&ext=jpg&ga=GA1.1.1123057924.1692027639&semt=sph" />
            <button>sign up</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
