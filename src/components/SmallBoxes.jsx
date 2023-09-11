import React from 'react';
import "../style/smallbox.css"


function SmallBox({ icon, title, text }) {
  return (
    <div className="small-box">
      <div className='small-box-container'>
        <div className="small-box-icon">
          <img className='small-box-img' src={icon} alt={title} />
        </div>
      <div className="small-box-name">{title}</div>
      </div>
      <p className='small-box-text'>{text}</p>
    </div>
  );
}

export default SmallBox;