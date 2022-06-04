import React from 'react'
import './GoogleMap'
import GoogleMap from './GoogleMap'
import './Main.css'
import Activities from './Activities'
import slider from 'react-slick/lib/slider'
import Intro from './Intro'
import {Link}  from 'react-router-dom'
import { useState } from 'react'
import Sliderimage from './Sliderimage'
import Geolocator from './Geolocator'
function Main() {
  const[search,setSearch]=useState("");
  return (
    <>
    
      
    <div className='maincontainer1'>
    <div className="container1">
      <div className="forms">
        <div className="form-content1">
          <div className="login-form">
            <form action="#">
              <Geolocator/>
              <div className="input-boxes">
                <div className="input-box">
                  <input type="text" placeholder="Enter Address 1" required />
                </div>
                
                <div className="input-box">
                  <input type="text" placeholder="Enter Address 2" required />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="No. of baskets of Garbage(approx)" required />
                </div>
                <div className="input-box1">
                  <label for="img">Upload image:</label>
                  <input type="file" id="img" name="img" accept="image/*"/>
                </div>
                <div className="button input-box">
                  <input type="submit" defaultValue="Sumbit"/>
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

export default Main