import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import './Login.css'
function Login() {
  const[email,setemail]=useState("")
  const[name,setname]=useState("")
  const[phonenumber,setphonenumber]=useState("")
  const[age,setage]=useState("")
  const[address,setaddress]=useState("")
  const[password,setpassword]=useState("")

  const register = ()=>{
    
  }

  return (
  <>
  <div className='maincontainer'>
    <div className="container">
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" required value={name} onChange={(e)=>setname(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Create Password" required value={password} onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter Phone Number" required value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your Age" required value={age} onChange={(e)=>setage(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your Address" required value={address} onChange={(e)=>setaddress(e.target.value)} />
                </div>
                <div className="button input-box">
                  <input type="submit" defaultValue="Sumbit" onClick={register}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default Login