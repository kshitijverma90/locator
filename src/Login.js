import React, { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import './Login.css'
function Login() {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")

  const signin = ()=>{

  }

  return (
  <>
  <div className='maincontainer'>
    <div className="container">
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" required value={email} onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="password" placeholder="Enter your password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div className="text"><a href="#">Forgot password?</a></div>
                <Link to={'/dashboard'}> <div className="button input-box">
                   <input type="submit" defaultValue="Sumbit" />
                </div></Link>
                <div className="text sign-up-text">Don't have an account?  <label htmlFor="flip"><Link to={'/signup'}>Sigup now</Link></label></div>
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