import React, { useEffect } from 'react'
import './Dashboard.css'
import Intro from './Intro'
import Activities from './Activities'
import { useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import Sliderimage from './Sliderimage'
import { useLocation } from 'react-router-dom'
function Dashboard() {
  const[search,setSearch]=useState("");
  
  

  return (
    <div className='back'>
      <div className='topdash'>
        <div>
        <form action="" className="search-bar">
    <input type="text" placeholder="Search Something" name="q" value={search} onChange={(e)=>setSearch(e.target.value)} />
  </form></div>
  <div className='buttons'>
   <Link to={'/main'}> <button className='dashbutton'>Contribute</button></Link>
    <button className='dashbutton'>Logout</button>
  </div>
     
  </div>
      <div className='dashboardmain'>
        <div className='firstline'>
          <Intro />
        </div>
        <div className='secondline'>
          <Activities />
          <Activities />
          <Activities />
          <Activities />
          <Activities />
        </div>
        <div className='thirdline'>
          <Sliderimage />
        </div>
      </div>
    </div>
  )
}

export default Dashboard