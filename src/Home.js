import React from 'react'
import reactRouterDom from 'react-router-dom'
import './Home.css'
import { Link,useHistory } from "react-router-dom";
function Home() {
  return (
    <>
  <div className="hero">
    <div className="navbar">
      
      <Link to={'/dashboard'}> <button type="button">Dashboard</button></Link>
     <Link to={'/login'}> <button type="button">Log In</button></Link>
     <Link to={'/signup'}> <button type="button">Sign Up</button></Link>
    </div>
    <div className="content">
      <small>Welcome to our</small>
      <h1>
        World's <br /> creative studio
      </h1>
      <button type="button"> <a href="https://www.space.com/24839-satellites.html"> Take a Tour</a> </button>
    </div>
    <div className="bubble" />
  </div>
</>
  )
}

export default Home