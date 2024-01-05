import React, { useState } from "react";
import "./contactform.css";
import axios from "axios";

export default function ContactForm() {

const [input,setInput] = useState({
fullName : '',
email : '',
subject :'',
message:'',
})

const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    success:''

  });

  const [button,setButton] = useState(false)

const handleChange = (e) => {
setInput({...input,[e.target.name]:e.target.value})
}


const handleSubmit = async (e) =>{
    e.preventDefault();
    setButton(true)

    const error = {}

    if(!input.fullName){
        error.fullName = 'Please enter your name'
    }
    
    // else if (!/^[A-Za-z0-9]{5,10}$/.test(input.fullname)) {
    //     error.fullname = 'Name must be 5 to 10 alphanumeric characters';
    // }

    if(!input.email){
        error.email = 'Please enter your Email address'
    }

    if(!input.subject){
        error.subject = 'Please enter your subject'
    }

    if(!input.message){
        error.message = 'Please enter your message'
    }else if(!/.{10,}/.test(input.message)){
        error.message = 'Message must be 10 to 50 alphanumeric characters';
    }

    if(Object.keys(error).length > 0){
        setErrors(error)
        setButton(false)
    }else{
       axios.post('http://localhost:6060/enquiry',input).then((res)=>{
        setInput({
          fullName: "",
          email: "",
          subject: "",
          message: ""
        })

        setErrors({
          fullName: "",
          email: "",
          subject: "",
          message: ""
        })
          console.log(res.data)
          error.success = res.data.message
          setErrors(error)
          setButton(false)
        }).catch((err)=>{
          console.log(err.reponse)
          error.server = 'something went wrong'
          setButton(false)
        })
    }
}
 



  return (
    <div className="contact-form">
      <h1>Let Us Discuss Career!</h1>
      <p>
        We are open 7 days 24 hrs to talk to you and listen to your queries.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-input">
        <label>Full Name</label><br/>
        <input type="text" 
        name="fullName"
        value={input.fullName}
        onChange={handleChange}
        /><br/>
         {errors.fullName && <span className="conatct-error">{errors.fullName}</span>}
        </div>

        <div className="form-input">
        <label>Email</label><br/>
        <input type="text"
         name="email"
         value={input.email}
         onChange={handleChange}
          /><br/>
         {errors.email && <span className="conatct-error">{errors.email}</span>}
        </div>

        <div className="form-input">
        <label>Subject</label><br/>
        <input type="text"
          name="subject"
          value={input.subject}
          onChange={handleChange}
        /><br/>
         {errors.subject && <span className="conatct-error">{errors.subject}</span>}
        </div>

        <div className="form-input">
        <label>Message</label><br/>
        <input type="text"
          name="message"
          value={input.message}
          onChange={handleChange}
        /><br/>
         {errors.message && <span className="conatct-error">{errors.message}</span>}
        </div>
        {errors.success && <span style={{color:'green',fontWeight:'500'}}>{errors.success}</span>}
        <div className="form-button">
            <button type="submit" disabled={button}>{button ? "Submitting......" : "Submit"}</button>
        </div>
     
      </form>
    </div>
  );
}
