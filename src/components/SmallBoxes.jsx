import React from 'react';
import "../style/smallbox.css"

function SmallBox({ icon, title, text }) {
  return (
    <div className="small-box">
      <div className='sb-second-container'>
        <div style={{fontSize:"2rem"}} className="icon">{icon}</div>
      <div className="name">{title}</div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default SmallBox;