import React from "react";
import './Intro.css'
function Intro({usermail}) {
  return (
    <div>
      <div className="firstline">
      <div id="card">
        <h1 className="introname">Ankit Kumar</h1>
        <div className="image-crop">
            <img id="avatar" src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"></img>
        </div>
        <div id="bio">
            <h3 style={{textAlign:"centre",paddingLeft:"28px"}}>ankitkr69@gmail.com</h3>
            <br/>
            <p>Bacon ipsum dolor amet short ribs prosciutto strip steak, pig ham tongue buffalo beef ribs hamburger pork venison. </p>
        </div>
        <div id="stats">
            <div className="col">
                <p className="stat">108</p>
                <p className="label">Contribution</p>
            </div>
                    <div className="col">
                <p className="stat">69</p>
                <p className="label">Rewards Won</p>
            </div>
                    <div className="col">
                <p className="stat">39</p>
                <p className="label">Reedem</p>
            </div>
        </div>
        
    </div>
      </div>
    </div>
  );
}

export default Intro;
