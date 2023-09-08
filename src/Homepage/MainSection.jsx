// components/MainSection.js
import React from 'react';
import SmallBox from '../components/SmallBoxes';
import { data } from '../utils/data';

function MainSection() {
  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="logo">
          {/* Your logo image and name go here */}
        </div>
        <h2>Some Text</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <div className="input-container">
          <input type="text" placeholder="Enter something" />
          <button>Submit</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {
            data.map((item)=>{
                return <div className="right-section-second">
                    <SmallBox icon={item.icon} title={item.title} text={item.text}/>
                </div>;
            })
        }
      </div>
    </div>
  );
}

export default MainSection;
